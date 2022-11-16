import React, {useRef} from 'react';
import {Button, Container} from "react-bootstrap";
import {Link, RedirectFunction} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";

const Auth = () => {
    const loginInputRef = useRef<any|null>()
    const passwordInputRef = useRef<any|null>()
    const dispatch = useDispatch();


    const checkLogin = () =>{
        if (loginInputRef.current.value == 1 && passwordInputRef.current.value == 2){
            dispatch({type: "AUTH"});
        }
        else{
            alert("Wrong password!");
        }
    }

    return (
        <Container style={{ marginTop:"100px" }}>
            Login:
            <React.Fragment><br/></React.Fragment>
            <input ref = {loginInputRef}/>
            <React.Fragment><br/></React.Fragment>
            Password:
            <React.Fragment><br/></React.Fragment>
            <input type={"password"} ref = {passwordInputRef}/>
            <React.Fragment><br/></React.Fragment>
            <React.Fragment><br/></React.Fragment>

            <Link to={"/admin"}>
                <Button onClick={checkLogin}>
                    Open admin panel
                </Button>
            </Link>


        </Container>
    );
};

export default Auth;