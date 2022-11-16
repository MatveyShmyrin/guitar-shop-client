import React from 'react';
import AdminPanelAddItem from "./AdminPanelAddItem";
import AdminPanelItems from "./AdminPanelItems";
import {Container} from "react-bootstrap";

const AdminPanel = () => {

    return (
        <Container>
            <h1>Admin Panel</h1>
            <AdminPanelAddItem/>
            <AdminPanelItems/>
        </Container>
    );
};

export default AdminPanel;