import React from 'react';
import {CRow} from "@coreui/react";
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../index";
import CatalogItem from "./CatalogItem";
import styles from "../styles/HomePageWhatsNewCards.module.css";

const HomePageWhatsNewCards = () => {
    let items = useSelector<RootState,any>(state => state.items);
    const reversedItems = [...items].reverse();
    const slicedItems = [...reversedItems].slice(0,3);

    const catalogItems = slicedItems.map((item:any) =>
        <CatalogItem
            id = {item.id}
            name = {item.name}
            img = {item.imgSrc}
            price = {item.price}
            description = {item.description}
            type = {item.type}
        />
    )

    return (
        <Container className={styles.homePageWhatsNewCards}>
            <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-3">
                {catalogItems}
            </CRow>
        </Container>
    );
};

export default HomePageWhatsNewCards;