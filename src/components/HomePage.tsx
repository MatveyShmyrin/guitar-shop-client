import React from 'react';
import styles from '../styles/HomePage.module.css';
import HomePageCarousel from "./HomePageCarousel";
import HomePageWhatsNew from "./HomePageWhatsNew";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <HomePageCarousel />
            <HomePageWhatsNew />
        </div>
    );
};

export default HomePage;