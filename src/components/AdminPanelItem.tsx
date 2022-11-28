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
        <div style={{width:"500px", height:"150px", border: "1px solid black"}}>
            {props.id}
            <CCardImage  style={{width:"45px", height:"45px"}} orientation="top" src={props.img} />
            {props.name}
            <React.Fragment><br/></React.Fragment>
            Description: {props.description}
            <React.Fragment><br/></React.Fragment>
            Price: {props.price}
            <React.Fragment><br/></React.Fragment>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
};

export default AdminPanelItem;