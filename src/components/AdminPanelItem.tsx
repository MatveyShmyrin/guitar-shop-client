import React from 'react';
import {CCard, CCardBody, CCardFooter, CCardImage, CCardText, CCardTitle, CCol} from "@coreui/react";
import {Container} from "react-bootstrap";

const AdminPanelItem = (props:any) => {
    return (
        <div style={{width:"1000px", height:"50px"}}>
            {props.id}
            <CCardImage  style={{width:"50px", height:"50px"}} orientation="top" src={props.img} />
            {props.name}
            {props.description}
            {props.price}
            <button>Delete</button>
        </div>
    );
};

export default AdminPanelItem;