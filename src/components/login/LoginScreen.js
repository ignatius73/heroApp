import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleClick = () =>{
        // history.push("/");
        //history.replace("/");
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type: types.login, 
            payload: { name: 'GABRIEL'}}
            );
        history.replace(lastPath);

    }
    return (
        <div className="container">
            <h1>LoginScreen</h1>
            <button className="btn btn-primary" onClick={ handleClick }>Login</button>
        </div>
    )
}
