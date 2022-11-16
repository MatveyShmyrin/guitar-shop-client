import React, {useEffect} from 'react';
import CatalogItem from "./CatalogItem";
import {Button, Container} from "react-bootstrap";
import styles from "../styles/CatalogItems.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../index";
import {CRow} from "@coreui/react";


const CatalogItems = () => {

    let state = useSelector<RootState,any>(store => store);

    let catalogItems = state.items.map((item:any) =>
        <CatalogItem
            id = {item.id}
            name = {item.name}
            img = {item.imgSrc}
            price = {item.price}
            description = {item.description}
            type = {item.type}
        />);


    return (
        <div>
            <Container className={styles.catalogItems}>
                <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                    {catalogItems}
                </CRow>
            </Container>
        </div>

    );
};

export default CatalogItems;