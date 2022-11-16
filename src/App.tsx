import React, {useEffect} from 'react';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import styles from './styles/App.module.css'
import {Route,  Routes} from "react-router-dom";
import CatalogPage from "./components/CatalogPage";
import AboutUsPage from "./components/AboutUsPage";
import ContactsPage from "./components/ContactsPage";
import AdminPanel from "./components/AdminPanel";
import axios from "axios";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    
    async function firstFetchItems(){
        const response = await axios.get("http://localhost:3001/items")
        response.data.map((item: any) => 
            dispatch({type: "ADD_NEW_ITEM", payload: item})
        );
    }

    useEffect(() => {
        firstFetchItems();
    });

    return (
    <div className={styles.app}>

            <Routes>
                <Route path="/" element={<><Header/><HomePage/></>} />
                <Route path="/catalog" element={<><Header/><CatalogPage/></>} />
                <Route path="/about" element={<><Header/><AboutUsPage/></>} />
                <Route path="/contacts" element={<><Header/><ContactsPage/></>} />
                <Route path="/admin" element={<AdminPanel/>} />
            </Routes>
    </div>
  );
}

export default App;
