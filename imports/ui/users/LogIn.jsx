// Dependancies :
import React, {useState, useContext} from 'react';
import { Context } from "../contexts/ActualUserContext";
import { useNavigate } from "react-router-dom";
// Calls to server :
import { usersLogin } from '../../api/users';
import { getLoggedUser } from '../../api/users';




export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { pickActualUser } = useContext(Context);
    const navigate = useNavigate();



    async function login( event ) {
        event.preventDefault();
        if (getLoggedUser() != null) {
            await usersLogout();
        }
        await usersLogin(email, password);

        pickActualUser(email);
        setEmail("");
        setPassword("");
        navigate('/');
       
    }

    const handleChangePseudo = ( event ) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = ( event ) => {
        setPassword(event.target.value);
    }

    return (
        <div id="login">
            <form onSubmit={login}>         
                <label>Log In :</label><br />
                <input type='text' placeholder='type your email' className = "form-control" value = {email} onChange={handleChangePseudo}></input><br />
                <input type='password' placeholder='type your password' className="form-control" value = {password} onChange={handleChangePassword}></input><br />
                <button type='submit' className="btn btn-primary" >Log In</button>
            </form>
        </div>
    );
}