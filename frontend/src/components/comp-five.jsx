import React, { useState, useEffect } from 'react';
import data from '../restApi.json';
import './css/comp-five.css';


const Component1 = () => {

    return (
        <>
            <div >
                <div className="header-wrapper">
                
                <h3 className="c5-header">
                    About Us
                </h3>
                <p className='c5-data'>
                    All about what we are and what we are doing!
                </p>
                    
                </div>

            </div>
            <div className="custom-container-wrapper " >
                <div className="row row-selected">
                    <div className="col-md-5">
                        <img className="DefiQuant" src="defiQuant.PNG" alt="Defi Quant" />
                    </div>
                    <div className="col-md-7 text-wrapping">
                        <h2 className='header-data header-font'>{data.c5heading}</h2>
                        <div>
                            <p className=''>{data.c5body}</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Component1;
