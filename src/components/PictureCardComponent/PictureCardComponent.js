import React from 'react';
import './PictureCardComponent.css';

const PictureCardComponent = props => {

  return (
    <div className="card" dataid={props.dataid}>
      <div className="img-container">
        <img className="img-fluid" alt={props.name} src={props.image}   onClick={() => props.handleIncrement(props.dataid)} />
      </div>
    </div>
    
  );
};

export default PictureCardComponent;