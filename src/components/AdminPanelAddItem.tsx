import React, {useRef, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import styles from "../styles/AdminPanel.module.css";
import {useDispatch, useSelector} from "react-redux";
import {MDBInput} from "mdb-react-ui-kit";


const AdminPanelAddItem = () => {

    let dispatch = useDispatch();

    let idInputRef = useRef<any|null>()
    let nameInputRef = useRef<any|null>()
    let imageInputRef = useRef<any|null>()
    let priceInputRef = useRef<any|null>()
    let descriptionInputRef = useRef<any|null>()
    let typeInputRef = useRef<any|null>()

    const addItemOnClick = () =>{
        dispatch({type:"ADD_NEW_ITEM", payload:
        {
            id: idInputRef.current.value,
            name: nameInputRef.current.value,
            imgSrc: imageInputRef.current.value,
            price: priceInputRef.current.value,
            description: descriptionInputRef.current.value,
            type: typeInputRef.current.value
        }})
    }



    return (
        <div>
            Id:
            <input ref = {idInputRef}></input>
            <React.Fragment>
                <br/>
            </React.Fragment>
            Name:
            <input ref = {nameInputRef}></input>
            <React.Fragment>
                <br/>
            </React.Fragment>
            Image:
            <input ref = {imageInputRef}></input>
            <React.Fragment>
                <br/>
            </React.Fragment>
            Price:
            <input ref = {priceInputRef}></input>
            <React.Fragment>
                <br/>
            </React.Fragment>
            Description:
            <input ref = {descriptionInputRef}></input>
            <React.Fragment>
                <br/>
            </React.Fragment>
            Type:
            <input ref = {typeInputRef}></input>
            <React.Fragment>
                <br/>
            </React.Fragment>
            <Button onClick = {addItemOnClick}>Add Item</Button>
        </div>
    );
};

export default AdminPanelAddItem;