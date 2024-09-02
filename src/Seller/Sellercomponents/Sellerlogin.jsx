import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sellerlogin = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [err, setErr] = useState({});
    const navigate = useNavigate();
    let emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let passwordreges = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        if (verify()) {
            let getdata = JSON.parse(localStorage.getItem("signupseller")) || [];
            let dataexists = getdata.find(e => e.email === data.email && e.password === data.password);
            if (dataexists) {
                localStorage.setItem("loginseller", JSON.stringify(data));
                navigate("/adminpanel");
            } else {
                alert("Please create an account");
            }
        }
        setData({ email: "", password: "" });
    };

    const verify = () => {
        let localErr = {};
        let valid = true;

        if (data.email.length === 0) {
            localErr.email = "Email is required";
            valid = false;
        } else if (!emailregex.test(data.email)) {
            localErr.email = "Invalid email";
            valid = false;
        }

        if (data.password.length === 0) {
            localErr.password = "Password is required";
            valid = false;
        } else if (!passwordreges.test(data.password)) {
            localErr.password = "Invalid password";
            valid = false;
        }

        setErr(localErr);
        return valid;
    };

    const styles = `
        .custom-form {
            border-radius: 10px;
            padding: 20px;
            background-color: #f0f0f0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transform: translateZ(0);
        }

        .custom-form input {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .error-message {
            color: red;
            font-size: 14px;
            margin-top: -10px;
            margin-bottom: 10px;
        }

        .custom-btn {
            width: 100%;
            background-color: #dc3545;
            border: none;
            color: white;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }

        .custom-btn:hover {
            background-color: #c82333;
        }

        .custom-link {
            text-decoration: none;
            color: #dc3545;
            display: block;
            margin-top: 10px;
            font-size: 14px;
        }

        .custom-link:hover {
            text-decoration: underline;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <h3 className='text-center text-danger'>Sign In</h3>

            <div className='container bg-info py-4 my-2 text-center w-25 custom-form'>
                <div className='mb-3'>
                    <label htmlFor=''>Email:</label><br />
                    <input type='text' className='form-control' name='email' value={data.email} onChange={handleChange} />
                </div>
                {err.email && <p className="error-message">{err.email}</p>}

                <div className='mb-4'>
                    <label htmlFor=''>Password:</label><br />
                    <input type='password' className='form-control' name='password' value={data.password} onChange={handleChange} />
                </div>
                {err.password && <p className="error-message">{err.password}</p>}

                <button className='btn btn-danger mt-3 custom-btn' onClick={handleClick}>Log In</button>
                <Link to="/sellersignup" className="custom-link">Create a new account</Link>
            </div>
        </>
    )
};

export default Sellerlogin;
