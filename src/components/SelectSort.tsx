import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";

const SelectSort = () => {

    const sortType = useSelector<RootState,any>(store => store.sortType);
    const dispatch = useDispatch();


    return (
        <div>
            <select value={sortType} onChange={event => dispatch(
                {type: "SORT_ITEMS_CHANGE_TYPE",
                        payload: event.target.value
                })}>
               <option disabled value = {""}>Sort</option>
               <option value={"a-z"}>A-Z</option>
               <option value={"z-a"}>Z-A</option>
               <option value={"min-max"}>Min to max</option>
               <option value={"max-min"}>Max to min</option>
            </select>
        </div>
    );
};

export default SelectSort;