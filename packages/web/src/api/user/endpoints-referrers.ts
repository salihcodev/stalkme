// utils:
import APIHandler from '../base'

/* 
  ***PLEASE***
   make sure to build user interface in interfaces directory,
   and get ride of dummy object below
*/

// setup <user> network requests
// >>>> SignIn, manage existed user to login
export const SignIn = (userData: object) =>
    APIHandler.post('/user/SignIn', userData)

// >>>> SIGNUP, create new user
export const signup = (userData: object) =>
    APIHandler.post('/user/signup', userData)
