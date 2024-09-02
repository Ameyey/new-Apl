import React, { Component } from 'react'
import Newsitem from './Newsitem'


export class Newpa extends Component {
  
  

  constructor(){
    super();
    console.log("Hellow I am a Comstructor from News Component");
    this.state={
      articles : [],
      location:false
    }
  }
  
  async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=tesla&from=2024-08-02&sortBy=publishedAt&apiKey=a2c0d99b175948428d101fac35e70960";
    let data = await fetch(url);
    let parsedData =await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles});

  }

  render() {
    return (
      <div className='container my-3'>
        <h1>New Monkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
        return <div className="col-md-4">
          <Newsitem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}           
        </div>  
      </div>
    )
  }
}

export default Newpa
