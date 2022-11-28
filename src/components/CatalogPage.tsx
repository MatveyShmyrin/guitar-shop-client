import React, {useState} from 'react';
import styles from '../styles/CatalogPage.module.css';
import CatalogItems from "./CatalogItems";
import {Button} from "react-bootstrap";
import {Input, Select} from "@mui/material";
import SelectSort from "./SelectSort";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
import {MDBCheckbox} from "mdb-react-ui-kit";

const CatalogPage = () => {
    let acousticType = useSelector<RootState,any>(store => store.acousticType);
    let electroType = useSelector<RootState,any>(store => store.electroType);
    let minPrice = useSelector<RootState,any>(store => store.minPrice);
    let maxPrice = useSelector<RootState,any>(store => store.maxPrice);

    const dispatch = useDispatch();
    return (
        <div className={styles.catalogPage}>

            <h1 style={{marginTop: "40px", textAlign: "center"}}>Guitar Catalog</h1>
            <div>
                <legend>Sort</legend>
                <SelectSort />
            </div>
                <legend>Filter</legend>
                <input type = "checkbox" checked={electroType} onChange={(event =>
                    dispatch({type: "FILTER_ITEMS_ELECTRO_TYPE", payload: event.target.checked}))}/>
                    Electro guitars
                <React.Fragment><br/></React.Fragment>
                <input type = "checkbox" checked={acousticType} onChange={(event =>
                    dispatch({type: "FILTER_ITEMS_ACOUSTIC_TYPE", payload: event.target.checked}))}/> Acoustic guitars
                <React.Fragment><br/></React.Fragment>
                Min price:
            <input value = {minPrice} onChange={(event => dispatch({type: "FILTER_ITEMS_MIN_PRICE", payload: event.target.value}))}/>
                <React.Fragment><br/></React.Fragment>
                Max price:
                <input value = {maxPrice} onChange={(event => dispatch({type: "FILTER_ITEMS_MAX_PRICE", payload: event.target.value}))}/>
            <CatalogItems />
        </div>
    );
};

export default CatalogPage;