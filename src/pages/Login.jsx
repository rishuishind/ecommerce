import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const emailRef = useRef();
    const passRef = useRef();

    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLogin(prev => {
            return (!prev);
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (isLogin) {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8ycB6q6pys2MMvD6gP4F308TdRu3RshI', {
                method: 'POST',
                body: JSON.stringify({
                    email: emailRef.current.value,
                    password: passRef.current.value,
                    returnSecureToken: true
                }),
                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Authentication Failed!!')
                }
            }).then((data) => {
                console.log('success');
                localStorage.setItem('idToken', data.idToken);
                navigate('/store');
            }).catch((err) => {
                alert(err);
            })
        } else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8ycB6q6pys2MMvD6gP4F308TdRu3RshI', {
                method: 'POST',
                body: JSON.stringify({
                    email: emailRef.current.value,
                    password: passRef.current.value,
                    returnSecureToken: true
                }),
                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Authentication Failed!!')
                }
            }).then((data) => {
                console.log('success');
                localStorage.setItem('idToken', data.idToken);
                navigate('/store');
            }).catch((err) => {
                alert(err);
            })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" ref={passRef} />
                </div>
                <div onClick={handleLogin}>
                    {isLogin ? 'Create an account' : 'Login with existing account'}
                </div>
                <div>
                    <button>{isLogin ? 'Login' : 'Signup'}</button>
                </div>
            </form>
        </div>
    )
}

export default Login
