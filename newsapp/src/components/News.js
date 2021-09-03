import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Angus Watson and Jessie Yeung, CNN",
            "title": "ISIS supporter shot dead by New Zealand police after shoppers stabbed in 'terrorist attack' - CNN",
            "description": "New Zealand police have shot and killed an ISIS supporter who injured at least six people in a supermarket \"terrorist attack\" in the Auckland suburb of New Lynn on Friday, authorities say.",
            "url": "https://www.cnn.com/2021/09/03/asia/new-zealand-attack-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210903011216-01-new-zealand-supermarket-attack-super-tease.jpg",
            "publishedAt": "2021-09-03T06:16:00Z",
            "content": null
          },
          {
            "source": { "id": null, "name": "CBS Sports" },
            "author": "Roger Gonzalez",
            "title": "USMNT vs. El Salvador score, ratings, highlights: USA settles for draw in Concacaf World Cup qualifying opener - CBSSports.com",
            "description": "The U.S. didn't have Christian Pulisic and it showed",
            "url": "https://www.cbssports.com/soccer/news/usmnt-vs-el-salvador-score-ratings-highlights-usa-settles-for-draw-in-concacaf-world-cup-qualifying-opener/live/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/09/03/0b1a74c3-0dfb-4685-a9a6-c5dfb53c01f3/thumbnail/1200x675/5d0928a2b2c5e8d201676121213ffa20/untitled-design-2021-09-03t074501-575.jpg",
            "publishedAt": "2021-09-03T06:05:48Z",
            "content": "The United States men's national team's World Cup qualifying campaign got off to an uneventful start on Thursday as the red, white and blue had to settle for a 0-0 draw at El Salvador. Playing at the… [+5674 chars]"
          },
          {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Madeline Holcombe, CNN",
            "title": "With dozens dead and rescue efforts ongoing, NYC mayor calls Ida flooding a major wakeup call - CNN",
            "description": "After Ida's remnants swept through the East Coast leaving at least 46 dead, many are mourning as they sift through the damage of a tragic storm the New York City's mayor urged everyone to see as \"the biggest wake-up call we could possibly get.\"",
            "url": "https://www.cnn.com/2021/09/03/weather/ida-eastern-us-flooding-friday/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210902091648-17-ida-storm-0902-new-york-super-tease.jpg",
            "publishedAt": "2021-09-03T05:25:00Z",
            "content": "(CNN)After Ida's remnants swept through the East Coast leaving at least 46 dead, many are mourning as they sift through the damage of a tragic storm the New York City's mayor urged everyone to see as… [+5148 chars]"
          },
          {
            "source": { "id": "the-jerusalem-post", "name": "The Jerusalem Post" },
            "author": "By  JERUSALEM POST STAFF",
            "title": "COVID-19 study quantifies antibody response to Pfizer, Moderna vaccines - The Jerusalem Post",
            "description": "A new study offers insight into vaccine recipients' immune response by age.",
            "url": "https://www.jpost.com/health-and-wellness/covid-19-study-quantifies-antibody-response-to-pfizer-moderna-vaccines-678587",
            "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImageFaceDetect/480915",
            "publishedAt": "2021-09-03T04:58:00Z",
            "content": null
          },
          {
            "source": { "id": null, "name": "CNET" },
            "author": "Monisha Ravisetti",
            "title": "Dead star collision causes stellar explosion like nothing seen before - CNET",
            "description": "The corpse of a star -- maybe a black hole, maybe a neutron star -- pulled a living star into the land of the dead.",
            "url": "https://www.cnet.com/news/dead-star-collision-causes-stellar-explosion-like-nothing-seen-before/",
            "urlToImage": "https://www.cnet.com/a/img/gUgQf3ApcUdAZUjwK62plJUYkME=/1200x630/2021/09/02/b15385a2-8a8c-4fa5-8056-22eae0c44486/unknown.png",
            "publishedAt": "2021-09-03T04:33:08Z",
            "content": "An artist's animation of an eclipsing binary star system.\r\nCaltech/IPAC\r\nFor years, a strange glimmer of light radiating from deep within the night sky had puzzled astronomers. Some meticulously trac… [+2181 chars]"
          },
          {
            "source": { "id": null, "name": "BBC News" },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Afghanistan: Dominic Raab visits Pakistan in push to help fleeing Afghans - BBC News",
            "description": "The foreign secretary's regional tour is focused on securing safe passage for those fleeing Afghanistan.",
            "url": "https://www.bbc.com/news/uk-58427808",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13CFB/production/_120374118_2abe5b21-edd8-4b69-93bd-0ccc57389314.jpg",
            "publishedAt": "2021-09-03T04:25:21Z",
            "content": "By Emma Harrison &amp; Becky MortonBBC News\r\nimage captionTens of thousands of refugees are expected to leave Afghanistan following the Taliban's rapid takeover\r\nForeign Secretary Dominic Raab will v… [+3698 chars]"
          }
    ]

    constructor(){
        super();
        console.log("constructor from news component")
        this.state = {
            articles : this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className = "container my-3">
                <h2>Top HeadLines</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem  title = {element.title.slice(0,45)} description={element.description.slice(0,88)} imgUrl ={element.urlToImage} newsUrl={element.url} />
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
