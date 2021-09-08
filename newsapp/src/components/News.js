import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general",
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    capitalizedFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    constructor(props) {
        super(props);
        console.log("constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
        document.title = `${this.capitalizedFirstLetter(
            this.props.category
        )}-NewsApp`;
    }

    async updateNews(pageNo) {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=6df08aae744f4a01be041f7e0eebc394&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
    }

    //run after render()
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=6df08aae744f4a01be041f7e0eebc394&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //   articles: parsedData.articles,
        //   totalResults: parsedData.totalResults,
        //   loading: false,
        // });
        this.updateNews();
    }

    handleNextClick = async () => {
        // if (
        //   !(
        //     this.state.page + 1 >
        //     Math.ceil(this.state.totalResults / this.props.pageSize)
        //   )
        // ) {
        //   let url = `https://newsapi.org/v2/top-headlines?country=${
        //     this.props.country
        //   }&category=${
        //     this.props.category
        //   }&apiKey=6df08aae744f4a01be041f7e0eebc394&page=${
        //     this.state.page + 1
        //   }&pageSize=${this.props.pageSize}`;
        //   this.setState({ loading: true });
        //   let data = await fetch(url);
        //   let parsedData = await data.json();

        //   this.setState({
        //     page: this.state.page + 1,
        //     articles: parsedData.articles,
        //     loading: false,
        //   });
        // }
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    };

    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${
        //   this.props.country
        // }&category=${
        //   this.props.category
        // }&apiKey=6df08aae744f4a01be041f7e0eebc394&page=${
        //   this.state.page - 1
        // }&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);

        // this.setState({
        //   page: this.state.page - 1,
        //   articles: parsedData.articles,
        //   loading: false,
        // });

        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    };

    render(props) {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: "35px 0px" }}>
                    Top {this.capitalizedFirstLetter(this.props.category)} HeadLines
                </h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading &&
                        this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title.slice(0, 45) : ""}
                                        description={
                                            element.description
                                                ? element.description.slice(0, 88)
                                                : ""
                                        }
                                        imgUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button
                        disabled={this.state.page <= 1}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handlePrevClick}
                    >
                        &larr; Prev
                    </button>
                    <button
                        disabled={
                            this.state.page + 1 >
                            Math.ceil(this.state.totalResults / this.props.pageSize)
                        }
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handleNextClick}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;
