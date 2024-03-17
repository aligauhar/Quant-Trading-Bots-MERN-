import React, { useState, useEffect } from 'react';
import data from '../restApi.json';
import { FaFly} from 'react-icons/fa';
import './css/comp-three.css';


const Component1 = () => {
    return (
        <>
        <div className="custom-container-wrapper">
            <div className="row">
                <div className="col-md-12 main-text">
                    <h2 className='header-data wrapper-2'>{data.c3head}</h2>
                    <h4>{data.c3text}<FaFly/></h4>
    
                </div>
            </div>
        </div>
        <div className="custom-container-wrapper">
        <div className="row">
        <div className="col-md-4 main-text">
            <div className="outer-card"><div className="inner-card">
                <img src="automation.png" alt="" />
                <h3>{data.card1h3}</h3>
                <p>{data.card1p}</p>
            </div>
            </div></div>
            <div className="col-md-4 main-text">
            <div className="outer-card"><div className="inner-card">
                <img src="selection.png" alt="" />
                <h3>{data.card2h3}</h3>
                <p>{data.card2p}</p>
            </div>
            </div></div>
            
            <div className="col-md-4 main-text">
            <div className="outer-card"><div className="inner-card">
                <img src="diversification.png" alt="" />
                <h3>{data.card3h3}</h3>
                <p>{data.card3p}</p>
            </div>
            </div></div>
          
        </div>
    </div>
    </>
    );
};

export default Component1;
