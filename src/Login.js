import React from 'react'
import {Button} from '@material-ui/core'
import {auth,provider} from "./firebase.js";
import "./Login.css"
import {useStateValue} from './StateProvider.js';
import {actionTypes} from './reducer.js'; 

function Login() {
    const [{}, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }
        ).catch((error) => alert(error.message));
    };
    return (
        <div className="login">
        <div className="login_container">
        <div className="login_test">
            <h1>Sign in to Fabric</h1> 
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
        </div>
            
        </div>
    )
}

export default Login
