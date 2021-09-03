import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className = "container my-3">
                <h2>Top HeadLines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title = "aaa"description="bbbbb" imgUrl ="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImageFaceDetect/480915" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title = "aaa"description="bbbbb"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title = "aaa"description="bbbbb"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
