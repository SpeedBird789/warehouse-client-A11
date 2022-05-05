import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import warehouse1 from '../../../images/banner2/warehouse1.png';
import warehouse2 from '../../../images/banner2/warehouse2.jpg';
import warehouse3 from '../../../images/banner2/warehouse3.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={warehouse1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Pinpoint Accuracy</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={warehouse2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Trusted By Millions</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={warehouse3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Always On Top Of Work</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}


export default Banner;