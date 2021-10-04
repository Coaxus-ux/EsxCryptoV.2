import React from 'react'
import Header from '../components/Header'
import Register from '../components/Register'
const RegisterPage = ({setSession}) => {
    return (
        <div>
            <Header/>
            <Register setSession={setSession}/>
        </div>
     );
}
export default RegisterPage;