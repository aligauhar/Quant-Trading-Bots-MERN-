import React from 'react';
import data from '../restApi.json'
const TwoColumnContainer = () => {
  return (
    <div id="Body-sec" className="container-fluid body-after-nav custom-container">
      <div className="row">
        <div className="col-md-6">
          <h2>{data.leftSideHead}</h2>
          <p>{data.leftSideText}</p>
        </div>

        <div className="col-md-6">
          <img
            src={data.imageSrc}  
            alt="Sample"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnContainer;
