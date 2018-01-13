import React from "react";
import "./JumbotronComponent.css";

const JumbotronComponent = props => (
<div className="jumbotron">
  <h1 className="display-3 text-center">Clicky Game!</h1>
  <p className="lead text-center">Click on an image to earn points, but don't click twice.</p>
</div>
);
export default JumbotronComponent;