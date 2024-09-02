import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = ({ setIsLoggedIn, searchQuery }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [range, setRange] = useState(500);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleFilter = (e) => {
    const { name, value } = e.target;
    if (name === 'price') {
      setRange(parseInt(value));
    } else if (name === 'category') {
      setSelectedCategory(value);
    } else if (name === 'color') {
      setSelectedColor(value);
    }
  };

  const handleProductClick = (product) => {
    Swal.fire({
      title: product.title,
      html: `
        <p>Description: ${product.description}</p>
        <p>Category: ${product.category}</p>
        <p>Color: ${product.color}</p>
        <p>Price: <span class="math-inline">${product.price} ₹</span></p><img src=${product.imagesrc} alt="${product.title}" style="width: 200px; height: 250px;"/><br><br><br>
        <button id="addToCartButton" style="background-color: #007bff; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">Add to Cart</button>
      `,
      imageUrl: product.image,
      imageWidth: 200,
      imageHeight: 250,
      imageAlt: product.title,
      showCloseButton: true,
      showConfirmButton: false,
      didOpen: () => {
        document.getElementById('addToCartButton').addEventListener('click', () => handleAddToCart(product));
      }
    });
  };

  const handleAddToCart = (product) => {
    navigate('/Home')
    const loggedInUser = JSON.parse(localStorage.getItem("login"));
    const updatedProduct = { ...product, email: loggedInUser.email };
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

    const existingProductIndex = cartProducts.findIndex(p => p.title === product.title && p.email === loggedInUser.email);

    if (existingProductIndex >= 0) {
      cartProducts[existingProductIndex].quantity += 1;
    } else {
      updatedProduct.quantity = 1;
      cartProducts.push(updatedProduct);
    }

    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: `${product.title} added to your cart!`,
    });
  };

  useEffect(() => {
    setIsLoggedIn(true);

    const storedProducts = JSON.parse(localStorage.getItem("seller_items")) || [];
    setProducts(storedProducts);

    const filtered = storedProducts.filter(product => 
      product.price <= range &&
      (selectedCategory === '' || product.category === selectedCategory) &&
      (selectedColor === '' || product.color === selectedColor) &&
      (searchQuery === '' || product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setFilteredProducts(filtered);
  }, [range, selectedCategory, selectedColor, searchQuery, setIsLoggedIn]);

  return (
    <>
      <br />
      <div className='container my-4'>
        <h2 className='text-center text-primary mb-4'>Filters</h2>
        <div className="mb-3">
          <label htmlFor="priceRange" className="form-label">Price Range: {range} ₹</label>
          <input type='range' className='form-range' onChange={handleFilter} max={2000} min={0} value={range} name="price" id="priceRange" />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryFilter" className="form-label">Category:</label>
          <select className="form-select" aria-label="Category filter" name="category" onChange={handleFilter} value={selectedCategory}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="colorFilter" className="form-label">Color:</label>
          <select className="form-select" aria-label="Color filter" name="color" onChange={handleFilter} value={selectedColor}>
            <option value="">All</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </div>
      </div>
      <div className='d-flex justify-content-evenly flex-wrap'>
        {filteredProducts.length === 0 ? (
          <div className='container text-center'>
            <p>No valid items found. Please enter a valid search term.</p>
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <div key={index} className='card w-25 m-3' style={{ cursor: "pointer" }} onClick={() => handleProductClick(product)}>
              <img src={product.imagesrc} alt={product.title} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'>Description: {product.description}</p>
                <p className='card-text'>Category: {product.category}</p>
                <p className='card-text'>Color: {product.color}</p>
                <p className='card-text'>Price: {product.price} ₹</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
