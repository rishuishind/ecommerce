import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Store from '../components/Contexts/Store';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const ctx = useContext(Store);

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

        localStorage.setItem('email', emailRef.current.value);

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
                ctx.login(data.idToken);
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
                ctx.login(data.idToken);
                navigate('/store');
            }).catch((err) => {
                alert(err);
            })
        }
    }

    return (
        <div>
            <form className=' mt-4 p-4 w-full' onSubmit={handleSubmit}>
                <div className='flex flex-col items-center border-b-2 w-[50%] ml-96 shadow-md '>
                    <div>
                        <label className=' font-bold' htmlFor="email">Email:</label>
                        <input className='rounded bg-slate-100 ml-4 mb-2' type="email" ref={emailRef} />
                    </div>
                    <div>
                        <label className=' font-bold' htmlFor="password">Password:</label>
                        <input className='rounded bg-slate-100 ml-4 mb-2' type="password" ref={passRef} />
                    </div>
                    <div className='font-bold hover:cursor-pointer' onClick={handleLogin}>
                        {isLogin ? 'Create an account' : 'Login with existing account'}
                    </div>
                    <div>
                        <button className=' bg-green-400 text-black rounded-md p-3 mb-4 mt-4'>{isLogin ? 'Login' : 'Signup'}</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Login
