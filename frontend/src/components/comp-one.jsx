import React, { useState, useEffect } from 'react';
import data from '../restApi.json';
import { FaHandPointDown, FaRocket } from 'react-icons/fa';
import Imagescroller from './image-scroller'
import './css/comp-one.css';
import SignIn from "./sign-in";

const Component1 = () => {
    const [line, setLine] = useState('');
    const textLines = [
        "Let you choose the Bots you like",
        "Assets Diversification",
        "Ownership of System"
    ];

    useEffect(() => {
        const animateText = async (text, direction) => {
            let newText = '';
            for (let i = 0; i <= text.length; i++) {
                newText = direction === 'in' ? text.slice(0, i) : text.slice(0, text.length - i);
                setLine(newText);
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        };
        
        const animateLines = async () => {
            while (true) {
                for (let i = 0; i < textLines.length; i++) {
                    await animateText(textLines[i], 'in');
                    await new Promise(resolve => setTimeout(resolve, 100)); // Adjust the delay between lines
                    await animateText(textLines[i], 'out');
                }
            }
        };
        

        animateLines();
    }, []);

    return (
        <div className="custom-container-wrapper image-scroller-mobile" 
       
        >
            <div className="row">
                <div className="col-md-5">
                    <h2 className='header-data'>{data.leftSideHead}</h2>
                    <h4>{data.makepossible}<FaHandPointDown /></h4>
                    <div>
                        <p className='typewriter'>{line}</p>
                    </div>
                    <p>{data.leftSideText}</p>
                    <div className="header-container">
                    <div className="header-toggle-buttons">
                    <SignIn/>
       
                    </div>
                </div>
                </div>
                <div className="col-md-7 ">
        
                    <Imagescroller/>
                    
                </div>
                

            </div>
        </div>
    );
};

export default Component1;
