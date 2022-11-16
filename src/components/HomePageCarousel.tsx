import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import styles from '../styles/HomePageCarousel.module.css';

const HomePageCarousel = () => {
    return (
        <div>
        <Carousel className={styles.carousel}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>New guitar collection</h3>
                        <p>Fender Stratocaster, Telecaster and more!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Guitar</h3>
                        <p>It's guitar...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>This man</h3>
                        <p>
                            This man learning how to play guitar
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default HomePageCarousel;