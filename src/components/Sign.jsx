import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sign = ({ setIsLoggedIn }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [err, setErr] = useState({});
  const navigate = useNavigate();

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;


  useEffect(() => {
      setIsLoggedIn(false);
    }, [setIsLoggedIn]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (verify()) {
      let signupData = JSON.parse(localStorage.getItem("signup")) || [];
      let userExists = signupData.find(e => e.email === data.email && e.password === data.password);

      if (userExists) {
        localStorage.setItem("login", JSON.stringify(data));
        setIsLoggedIn(true);
        navigate("/home");
      } else {
        alert("Please create an account first.");
      }
    }
  };

  const verify = () => {
    let localErr = {};
    let valid = true;

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

  const styles = {
    body: {
      backgroundImage: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      height: '100vh',
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
    },
    title: {
      color: '#4a4a4a',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
    inputField: {
      width: '100%',
      marginBottom: '15px',
    },
    button: {
      width: '100%',
      backgroundColor: '#ff9a9e',
      color: 'white',
      border: 'none',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    link: {
      color: '#4a4a4a',
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h3 style={styles.title}>Sign In Page</h3>

        <div style={styles.inputField}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          {err.email && <p className="text-danger">{err.email}</p>}
        </div>

        <div style={styles.inputField}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          {err.password && <p className="text-danger">{err.password}</p>}
        </div>

        <button style={styles.button} onClick={handleClick}>Sign In</button>
        <Link to="/signup" style={styles.link}>Create an account</Link>
      </div>
    </div>
  );
};

export default Sign;
