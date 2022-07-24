import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {

  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    }).catch(error => alert(error.message))
  } 

  return (
    <div className='login'>
        <div className='login__logo'>
            <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt=""/>
            <img src="https://www.logo.wine/a/logo/Facebook,_Inc./Facebook,_Inc.-Logo.wine.svg" alt=""/>
        </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login