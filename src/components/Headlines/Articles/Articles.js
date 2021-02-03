import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
import "./Articles.css";
var i = 0;
function Articles({ endPoint, title }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios.get(endPoint).then((res) => {
        console.log(res.data);
        const info = res.data.articles.slice(0, 5);
        setArticles(info);
      });
    };
    getData();
  }, [endPoint]);
  console.log(articles);
  return (
    <div className="Articles">
      <h1 className="Articles__title">{title.toUpperCase()}</h1>
      {articles.map((article) => {
        return <Article key={i++} content={article} />;
      })}
    </div>
  );
}

export default Articles;
