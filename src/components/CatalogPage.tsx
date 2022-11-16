import React from 'react';
import styles from '../styles/CatalogPage.module.css';
import CatalogItems from "./CatalogItems";

const CatalogPage = () => {
    return (
        <div className={styles.catalogPage}>
            <h1 style={{marginTop: "40px", textAlign: "center"}}>Guitar Catalog</h1>
            <CatalogItems />
        </div>
    );
};

export default CatalogPage;