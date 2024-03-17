import React from 'react';
import data from '../restApi.json';
import { FaFly} from 'react-icons/fa';
import './css/comp-two.css';


const Component1 = () => {
    return (
        <>
        <div className="custom-container-wrapper ">
            <div className="row">
                <div className="col-md-12 main-text">
                    <h2 className='header-data wrapper-2'>{data.c2head}</h2>
                    <h4>{data.c2text}<FaFly/></h4>
    
                </div>
            </div>
        </div>
        <div className="custom-container-wrapper">
        <div className="row">
            <div className="col-md-3 main-text">
                <img src="step1.png" alt="" />
                <p className='steps'>{data.step1Name}</p>
                <h3>{data.step1Heading}</h3>
                <p>{data.step1Body}</p>
            </div>
            <div className="col-md-3 main-text">
                <img src="step2.png" alt="" />
                <p className='steps'>{data.step2Name}</p>
                <h3>{data.step2Heading}</h3>
                <p>{data.step2Body}</p>
            </div>
            <div className="col-md-3 main-text">
                <img src="step3.png" alt="" />
                <p className='steps'>{data.step3Name}</p>
                <h3>{data.step3Heading}</h3>
                <p>{data.step3Body}</p>
            </div>
            <div className="col-md-3 main-text">
                <img src="step4.png" alt="" />
                <p className='steps'>{data.step4Name}</p>
                <h3>{data.step4Heading}</h3>
                <p>{data.step4Body}</p>
            </div>
        </div>
    </div>
    </>
    );
};

export default Component1;
