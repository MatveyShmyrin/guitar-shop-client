import React from 'react';
import AdminPanelAddItem from "./AdminPanelAddItem";
import AdminPanelItems from "./AdminPanelItems";
import {Container} from "react-bootstrap";

const AdminPanel = () => {

    return (
        <Container style={{ marginTop:"100px" }}>
            <h1>Admin Panel</h1>
            <React.Fragment><br/></React.Fragment>
            <AdminPanelAddItem/>
            <React.Fragment><br/></React.Fragment>
            <AdminPanelItems/>
        </Container>
    );
};

export default AdminPanel;