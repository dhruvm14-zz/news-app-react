import React from "react";
import Articles from "./Articles/Articles";
import "./Headlines.css";
import requests from "../../requests";

function Headlines() {
  return (
    <div className="Headlines">
      <Articles endPoint={requests.topHeadlines} />
      <Articles endPoint={requests.technology} />
      <Articles endPoint={requests.sports} />
      <Articles endPoint={requests.entertainment} />
    </div>
  );
}

export default Headlines;
