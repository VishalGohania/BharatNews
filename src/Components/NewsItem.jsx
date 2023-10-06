import React from 'react'

const NewsItem = (props) => {
      let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card my-3">
            <div>
            <span className="badge rounded-pill bg-danger" style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}> {source}
            </span>
            </div>
            <img src={imageUrl ? imageUrl : "https://www.hindustantimes.com/ht-img/img/2023/09/30/1600x900/TOPSHOT-US-WEATHER-FLOOD-weather-0_1696045284184_1696045377385.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small class="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem