import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
import styles from '../styles/Pagination.module.css';
import {Container} from "react-bootstrap";


const Pagination = ({itemsPerPage, totalItems, paginate, catalogItemsSorted}: any) => {

    let pageNumbers = useSelector<RootState,any>(store => store.pageNumbers);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "DELETE_PAGE_NUMBERS"})
        paginate(1)
        for (let i = 2; i <= Math.ceil(totalItems / itemsPerPage); i++){
        dispatch({type: "ADD_PAGE_NUMBERS", payload: i})
        }
    },[totalItems])




    let pageNumbersMapped = pageNumbers.map((num: any) => (

        <li key={num} className='page-item'>
            <a onClick={()=> paginate(num)} className='page-link'>
                {num}
            </a>
        </li>
    ))

    return (
        <Container>
            <nav>
                <ul className='pagination'>
                    {pageNumbersMapped}
                </ul>
            </nav>
        </Container>
    );
};

export default Pagination;