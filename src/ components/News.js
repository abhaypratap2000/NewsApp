import React, {useEffect , useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// document.title = `${capitalizedFirstLetter(props.category)}- QuickNewsFeed`;

const News = (props)=>{

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
 
  const capitalizedFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  
   
  
  const updatenews = async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=397d65a80af24167aa9e2e9cc3eb2039&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    
  }
  useEffect(() => {
    updatenews();
  },[props.category])
  
  
//  const handlePreviousclick = async () => {
//    setpage(page-1)
//     updatenews();
//   };

//   const handlenextclick = async () => {
//     if (!(page + 1 > Math.ceil(totalResults / props.pageSize) ))
//     setpage(page+1)
//     updatenews();
//   };


   const fetchMoreData = async () => {  
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=397d65a80af24167aa9e2e9cc3eb2039&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    
  };


  return (
    <>
        <h1 className="text-center" style={{ margin: '35px 0px' ,marginTop: '90px' }}>NewsMonkey - Top {capitalizedFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
        > 
            <div className="container">
                 
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>
            </div> 
        </InfiniteScroll>

    </>
  )    
}


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propstypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
