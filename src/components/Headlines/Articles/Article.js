import React, { useState } from "react";
import "./Article.css";

function Article({ content }) {
  const [timeAgo, settimeAgo] = useState("");
  const date = new Date(content.publishedAt);
  console.log(date);

  return (
    <div className="Article">
      <div
        className="article__img"
        style={{ backgroundImage: `url(${content.urlToImage})` }}
      ></div>
      <div className="article__content">
        <h1 className="article__heading">{content.title}</h1>
        <p className="article__author">
          {content.author && `${content.author} |`} {content.source.name}
        </p>
        <p>{content.description}</p>
        <a href={content.url} target="_blank">
          READ MORE
        </a>
        <p>{(date.getHours(), date.getMinutes(), date.getSeconds())}</p>
      </div>
    </div>
  );
}

export default Article;
