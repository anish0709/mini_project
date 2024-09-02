import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Form2 = () => {
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [signupData, setSignupData] = useState([]);
    const [err, setErr] = useState({});
    const navigate = useNavigate();

    const bgStyle = {
        background: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
        height: '100vh',
        margin: '0',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    };

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        if (verify()) {
            const emailExists = signupData.find(user => user.email === data.email);

            if (!emailExists) {
                const updatedData = [...signupData, data];
                setSignupData(updatedData);
                localStorage.setItem("signup", JSON.stringify(updatedData));
                navigate("/");
            } else {
                setErr({ ...err, email: "Email already exists" });
            }
        }
        setData({ name: "", email: "", password: "" });
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("signup")) || [];
        setSignupData(storedData);
    }, []);

    const verify = () => {
        let localErr = {};
        let valid = true;

        if (data.name.length === 0) {
            localErr.name = "Name is required";
            valid = false;
        } else if (data.name.length < 5) {
            localErr.name = "Name must be at least 5 characters";
            valid = false;
        }

        if (data.email.length === 0) {
            localErr.email = "Email is required";
            valid = false;
        } else if (!emailRegex.test(data.email)) {
            localErr.email = "Invalid email";
            valid = false;
        }

        if (data.password.length === 0) {
            localErr.password = "Password is required";
            valid = false;
        } else if (!passwordRegex.test(data.password)) {
            localErr.password = "Password must be 8-16 characters and include at least one digit, lowercase, uppercase, and special character";
            valid = false;
        }

        setErr(localErr);
        return valid;
    };

    return (
        <div style={bgStyle}>
            <h3 className='text-center text-danger mb-4'>Sign up page</h3>

            <div className='container bg-light py-5 my-2 text-center w-25 rounded shadow'>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>Name:</label>
                    <input type='text' className='form-control' id='name' name='name' value={data.name} onChange={handleChange} />
                    {err.name && <p className='text-danger'>{err.name}</p>}
                </div>

                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email:</label>
                    <input type='text' className='form-control' id='email' name='email' value={data.email} onChange={handleChange} />
                    {err.email && <p className='text-danger'>{err.email}</p>}
                </div>

                <div className='mb-4'>
                    <label htmlFor='password' className='form-label'>Password:</label>
                    <input type='password' className='form-control' id='password' name='password' value={data.password} onChange={handleChange} />
                    {err.password && <p className='text-danger'>{err.password}</p>}
                </div>

                <button className='btn btn-danger mt-3' onClick={handleClick}>Signup</button>
                <Link to="/" className='mt-3 text-danger' style={{ textDecoration: "underline", cursor: "pointer" }}>Already have an account</Link>
            </div>
        </div>
    );
};

export default Form2;
