import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";
import {CRow} from "@coreui/react";
import {Button, Container} from "react-bootstrap";
import AdminPanelItem from "./AdminPanelItem";

const AdminPanelItems = () => {

    let state = useSelector<RootState,any>(store => store);

    let adminPanelItems = state.items.map((item:any) =>
        <AdminPanelItem
            id = {item.id}
            name = {item.name}
            img = {item.imgSrc}
            price = {item.price}
            description = {item.description}
            type = {item.type}
        />);

    return (
        <div>
            {adminPanelItems}
        </div>
    );
};

export default AdminPanelItems;