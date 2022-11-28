import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import styles from './styles/App.module.css'
import {Navigate, Route,  Routes} from "react-router-dom";
import CatalogPage from "./components/CatalogPage";
import AboutUsPage from "./components/AboutUsPage";
import ContactsPage from "./components/ContactsPage";
import AdminPanel from "./components/AdminPanel";
import Auth from "../src/components/Auth"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./index";

function App() {

    const dispatch = useDispatch();
    const items = useSelector<RootState,any>(store => store.items);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);

    async function fetchItems(){
        const response = await axios.get("https://my-json-server.typicode.com/MatveyShmyrin/guitar-shop-db-file/items")
        dispatch({type: "SET_ITEMS", payload: response.data})
    }
    let storeAuth = useSelector<RootState, number|"">(store => store.auth);

    useEffect(() => {
        fetchItems();
    },[]);




    return (
    <div className={styles.app}>
            <Routes>
                <Route path="/" element={<><Header/><HomePage/></>} />
                <Route path="/catalog" element={<><Header/><CatalogPage/></>} />
                <Route path="/about" element={<><Header/><AboutUsPage/></>} />
                <Route path="/contacts" element={<><Header/><ContactsPage/></>} />
                <Route path="/auth" element={
                    storeAuth ? (
                        <Navigate replace to="/admin" />
                    ) : (
                        <><Header/><Auth/></>
                    )
                } />
                <Route path="/admin"
                       element={
                           storeAuth ? (
                               <><Header/><AdminPanel/></>
                           ) : (
                               <Navigate replace to="/auth" />
                           )
                       }
                />
            </Routes>
    </div>
  );
}

export default App;
