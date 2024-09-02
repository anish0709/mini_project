import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import "../Navbar.css";

const Navbar = ({ setSearchQuery, setIsLoggedIn, showcartdata, settheme }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [cartLength, setCartLength] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
    setQuery(''); // Clear the query after search
  };  

  const handleTheme = (e) => {
    settheme(e.target.checked);
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
    // setIsLoggedIn(false); // Uncomment if needed to handle isLoggedIn state
  };

  const handleHome = () => {
    navigate("/Home");
  };

  useEffect(() => {
    setCartLength(showcartdata.length);
  }, [showcartdata]);

  return (
    <div className='d-flex justify-content-evenly gap-5'>
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714176000&semt=sph" width={55} height={45} alt="Logo" onClick={handleHome} style={{ cursor: "pointer" }} />
      <form onSubmit={handleSearch} className="d-flex align-items-center">
        <input type="search" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className='btn btn-info' type="submit">Search</button>
      </form>
      <Link to="/cart" className="cart-icon">
        <FaShoppingCart style={{ width: 30, height: 30, cursor: "pointer" }} />
        <span>{cartLength}</span>
      </Link>
      <label className="switch">
        <input type="checkbox" onChange={handleTheme} />
        <span className="slider round"></span>
      </label>
      <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
