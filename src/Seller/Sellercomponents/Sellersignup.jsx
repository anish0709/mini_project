import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sellersignup = () => {
    const [data, setdata] = useState({name:"", email:"", password:""});
    const [signupdata, setsignupdata] = useState([]);
    const [err,seterr] = useState({});

    const navigate = useNavigate();
    let emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let passwordreges = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    const handlechange = (e)=>{
        setdata({...data, [e.target.name]:e.target.value});
    };
    const handleclick = () => {
        if (verify()) {
          const emailExists = signupdata.find(user => user.email === data.email);

          if (!emailExists) {
            let aaa = [...signupdata];  
            let bbb = aaa.concat(data);
            setsignupdata(bbb);
            localStorage.setItem("signupseller", JSON.stringify(bbb));
            navigate("/");
          } else {
            seterr({ ...err, email: "Email already exists" });
          }
        }
        setdata({ name: "", email: "", password: "" });
      };

    useEffect(()=>{
        let aaa = JSON.parse(localStorage.getItem("signupseller")) || [];
        setsignupdata(aaa);
    },[])
    const verify = ()=>{
        let localerr = {};
        let valid = true;
        if(data.name.length === 0) {
            localerr.name = "Name is required";
            valid = false;
        } else if(data.name.length < 5) {
            localerr.name = "Name must be at least 5 characters";
            valid = false;
        }

        if(data.email.length === 0) {
            localerr.email = "Email is required";
            valid = false;
        } else if(!emailregex.test(data.email)) {
            localerr.email = "Invalid email";
            valid = false;
        }

        if(data.password.length === 0) {
            localerr.password = "Password is required";
            valid = false;
        } else if(!passwordreges.test(data.password)) {
            localerr.password = "Invalid password";
            valid = false;
        }

        seterr(localerr);
        return valid;
    };

    const styles = {
        body: {
            backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
            height: '100vh',
            margin: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            fontFamily: 'sans-serif',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '300px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
        },
        title: {
            textAlign: 'center',
            fontSize: '30px',
            marginBottom: '20px',
        },
        inputField: {
            width: '100%',
            marginBottom: '10px',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
        },
        button: {
            width: '100%',
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
            background: '#1abc9c',
            color: '#fff',
            cursor: 'pointer',
            marginTop: '20px',
        },
        link: {
            textAlign: 'center',
            marginTop: '20px',
            color: '#1abc9c',
            textDecoration: 'underline',
            cursor: 'pointer',
        },
        error: {
            color: 'red',
            fontSize: '12px',
        },
    };

    return (
        <div style={styles.body}>
            <h3 style={styles.title}>Sign up page</h3>

            <div style={styles.container}>
                <div style={styles.inputField}>
                    <label>Name:</label><br/>
                    <input type='text' style={styles.input} name='name' value ={data.name} onChange={handlechange}/>
                </div>
                {err.name && <p style={styles.error}>{err.name}</p>}

                <div style={styles.inputField}>
                    <label>Email:</label><br/>
                    <input type='text' style={styles.input} name='email' value={data.email} onChange={handlechange}/>
                </div>
                {err.email && <p style={styles.error}>{err.email}</p>}

                <div style={styles.inputField}>
                    <label>Password:</label><br/>
                    <input type='text' style={styles.input} name='password' value={data.password} onChange={handlechange}/>
                </div>
                {err.password && <p style={styles.error}>{err.password}</p>}

                <button style={styles.button} onClick={handleclick}>Signup</button>
                <Link to = "/sellerlogin"><p style={styles.link}>already have an account</p></Link>
            </div>
        </div>
    );
};

export default Sellersignup;
