import React from 'react';
import {CCardImage} from "@coreui/react";
import {useDispatch} from "react-redux";

const AdminPanelItem = (props:any) => {

    const dispatch = useDispatch();
    const deleteItem = () =>
    {
        dispatch({type: "DELETE_ITEM", payload: props.id})
    }
    return (
        <div style={{width:"1000px", height:"50px"}}>
            {props.id}
            <CCardImage  style={{width:"50px", height:"50px"}} orientation="top" src={props.img} />
            {props.name}
            {props.description}
            {props.price}
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
};

export default AdminPanelItem;