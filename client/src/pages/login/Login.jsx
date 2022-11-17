import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";

const Login = () => {
    const [credentials,setCredentials] = useState({
        username:undefined,
        password:undefined
    });

    const {loading,error,dispatch} = useContext(AuthContext);

    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="username"  id="username" onChange={handleChange} className="linput"/>
                <input type="password" placeholder="password" id="password"  onChange={handleChange} className="linput"/>
                <button className="lButton">Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    );
};

export default Login;