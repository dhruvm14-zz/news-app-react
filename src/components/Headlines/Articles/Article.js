import React from "react";

function Article({ content }) {
  return (
    <div>
      <h5>{content.title}</h5>
    </div>
  );
}

export default Article;
