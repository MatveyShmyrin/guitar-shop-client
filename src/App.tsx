import React, {useEffect} from 'react';
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

    async function firstFetchItems(){
        const response = await axios.get("https://my-json-server.typicode.com/MatveyShmyrin/guitar-shop-db-file/items")
        response.data.map((item: any) => 
            dispatch({type: "ADD_NEW_ITEM", payload: item})
        );
    }
    let storeAuth = useSelector<RootState, number|"">(store => store.auth);

    useEffect(() => {
        firstFetchItems();
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
