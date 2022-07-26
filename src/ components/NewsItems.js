const  NewsItems = (props) => { 
   
        let {title, description, imageUrl, newsUrl ,date , author} = props;   
        return (
            <div>
                <div className="card">
                <img src={!imageUrl?"https://about.fb.com/wp-content/uploads/2021/01/Under-the-Hood_Hero_1920x1080_Final.png":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>Author of Article {!author?" Unknown" :author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    
}

export default NewsItems