import React from "react";
import "./HeaderComponent.css";

const HeaderComponent = props => (
  <header>
    <div className="container-fluid">
    <div className="row">
      <div className="col">
        <h2 className="float-left brand">{ props.brandname }</h2>
      </div>
      <div className="col">
        <h3>{ props.heading }</h3>
      </div>
      <div className="col">
        <h3 className="float-right">Score { props.score} | Top Score { props.topScore }  </h3>
      </div>  
    </div> 
    </div> 
  </header>
);

export default HeaderComponent;
 