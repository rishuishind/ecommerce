import { useRef } from "react";

const Contact = () => {
    const nameref = useRef();
    const emailref = useRef();
    const phoneref = useRef();
    const hadnleSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            name: nameref.current.value,
            email: emailref.current.value,
            phone: phoneref.current.value
        }
        const response = await fetch('https://react-http-96a9c-default-rtdb.firebaseio.com/contact.json', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json();
        console.log(data);
        nameref.current.value = '';
        emailref.current.value = '';
        phoneref.current.value = '';
    }
    return (
        <form onSubmit={hadnleSubmit} className='flex w-screen justify-center'>
            <div className='flex flex-col text-center m-5 p-6 bg-gray-200 rounded-md shadow-md w-max'>
                <div className='p-3'>
                    <label htmlFor="Name">Name:</label>
                    <input ref={nameref} className='border ml-6 p-2 rounded-md border-b-2' type="text" />
                </div>
                <div className='p-3'>
                    <label htmlFor="Email">Email:</label>
                    <input ref={emailref} className='border ml-6 p-2 rounded-md border-b-2' type="email" />
                </div>
                <div className='p-3'>
                    <label htmlFor="Phone">Phone:</label>
                    <input ref={phoneref} className='border ml-6 p-2 rounded-md border-b-2' type="number" />
                </div>
                <button className='bg-black text-white rounded-md p-1 mt-3'>Contact Us</button>
            </div>
        </form>
    );
};

export default Contact;