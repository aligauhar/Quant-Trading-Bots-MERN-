import React from 'react';
import './css/image-scroller.css';

const Imagescroller = () => {
    return (
        <div class="container image-scroller-mobile-block">
            <div class="column">
                <div class="scrolling-images ">
                    <img src="1.PNG" alt="1" />
                    <img src="2.PNG" alt="2" />
                    <img src="3.PNG" alt="3" />
                    <img src="4.PNG" alt="4" />
                    <img src="10.PNG" alt="10" />
                </div>
            </div>
            <div class="column">
                <div class="scrolling-images anticlockwise image-scroller-mobile-none">
                    
                    <img src="1.PNG" alt="1" />
                    <img src="2.PNG" alt="2" />
                    <img src="3.PNG" alt="3" />
                    <img src="4.PNG" alt="4" />
                    <img src="10.PNG" alt="10" />

                </div>
            </div>
            <div class="column">
                <div class="scrolling-images image-scroller-mobile-none">
                    <img src="1.PNG" alt="1" />
                    <img src="2.PNG" alt="2" />
                    <img src="3.PNG" alt="3" />
                    <img src="4.PNG" alt="4" />
                    <img src="10.PNG" alt="10" />
                </div>
            </div>
        </div>
    );
};

export default Imagescroller;
