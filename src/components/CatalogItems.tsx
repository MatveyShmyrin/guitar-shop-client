import React, {useEffect, useState} from 'react';
import CatalogItem from "./CatalogItem";
import {Button, Container} from "react-bootstrap";
import styles from "../styles/CatalogItems.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
import {CRow} from "@coreui/react";


const CatalogItems = () => {

    let state = useSelector<RootState,any>(store => store);
    let acousticType = useSelector<RootState,any>(store => store.acousticType);
    let electroType = useSelector<RootState,any>(store => store.electroType);
    let sortType = useSelector<RootState,any>(store => store.sortType);
    let minPrice = useSelector<RootState,any>(store => store.minPrice);
    let maxPrice = useSelector<RootState,any>(store => store.maxPrice);

    const filterFunction = (item:any) => {
        if (((item.type == "acoustic" && acousticType == true) || (item.type == "electro" && electroType == true)) && ((item.price >= minPrice) && (item.price <= maxPrice))){
            return true;
        }
        return false;
    }

    let catalogItemsFiltered = state.items.filter((item:any) => filterFunction(item));
    let catalogItemsSorted = catalogItemsFiltered;
    if (sortType == "a-z"){
        catalogItemsSorted = catalogItemsFiltered.sort((a: any, b:any) =>
            {
                var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            }
        )
    }
    if (sortType == "z-a"){
        catalogItemsSorted = catalogItemsFiltered.sort((a: any, b:any) =>
            {
                var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                if (nameB < nameA)
                    return -1
                if (nameB > nameA)
                    return 1
                return 0
            }
        )
    }
    if (sortType == "min-max"){
        catalogItemsSorted = catalogItemsFiltered.sort((a: any, b:any) =>
            {
                return a.price - b.price;
            }
        )
    }
    if (sortType == "max-min"){
        catalogItemsSorted = catalogItemsFiltered.sort((a: any, b:any) =>
            {
                return b.price - a.price;
            }
        )
    }



    let catalogItems = catalogItemsSorted.map((item:any) =>
        <CatalogItem
            id = {item.id}
            name = {item.name}
            img = {item.imgSrc}
            price = {item.price}
            description = {item.description}
            type = {item.type}
        />
    );


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