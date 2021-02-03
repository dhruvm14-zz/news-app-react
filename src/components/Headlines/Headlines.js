import React from "react";
import Articles from "./Articles/Articles";
import "./Headlines.css";
import requests from "../../requests";

function Headlines() {
  return (
    <div className="Headlines">
      <Articles endPoint={requests.topHeadlines} title="Top Headlines" />
      <Articles endPoint={requests.technology} title="Technology" />
      <Articles endPoint={requests.sports} title="Sport" />
      <Articles endPoint={requests.entertainment} title="Entertainment" />
    </div>
  );
}

export default Headlines;
