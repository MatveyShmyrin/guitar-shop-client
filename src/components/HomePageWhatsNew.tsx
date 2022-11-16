import React from 'react';
import {Container} from "react-bootstrap";
import styles from "../styles/HomePageWhatsNew.module.css";
import HomePageWhatsNewCards from "./HomePageWhatsNewCards";

const HomePageWhatsNew = () => {

    return (
        <Container className={styles.whatsNew}>
            <div className={styles.whatsNewText}>
                <h1>WHAT'S NEW</h1>
            </div>
            <HomePageWhatsNewCards />
        </Container>
    );
};

export default HomePageWhatsNew;