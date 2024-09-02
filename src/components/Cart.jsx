import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';

const Cart = ({ showcartdata, setshowcart }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let logindata = JSON.parse(localStorage.getItem("login"));
    let getcartdata = JSON.parse(localStorage.getItem("cartProducts"));
    let showcart = getcartdata.filter((key) => {
      return key.email === logindata.email;
    });

    // Initialize quantity to 1 for each product if it doesn't exist
    showcart = showcart.map(product => {
      return {
        ...product,
        quantity: product.quantity || 1
      };
    });

    setshowcart(showcart);
  }, [setshowcart]);

  const handleDelete = (index) => {
    const newCartData = [...showcartdata];
    newCartData.splice(index, 1);
    setshowcart(newCartData);
    localStorage.setItem('cartProducts', JSON.stringify(newCartData));
  };

  const calculateTotalPrice = () => {
    return showcartdata.reduce((total, product) => total + ((product.price - product.discount) * product.quantity), 0);
  };

  const handleQuantityChange = (index, event) => {
    const newCartData = [...showcartdata];
    newCartData[index].quantity = parseInt(event.target.value);
    setshowcart(newCartData);
  };

  const handleclickpay = () => {
    localStorage.setItem('total', calculateTotalPrice());
    navigate('/payment');
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mb-4">Your Cart {showcartdata.length}</h1>
          {showcartdata.map((product, index) => (
            <div key={index} className="card mb-3" style={{ maxWidth: '400px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.image} alt={product.title} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title} <AiFillDelete onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }} /></h5>
                    <p className="card-text">Price for each item: ₹ {product.price}</p>
                    <p className="card-text">Quantity: <input type="number" value={product.quantity} onChange={(e) => handleQuantityChange(index, e)} /></p>
                    <p className="card-text">Total: ₹ {((product.price - product.discount) * product.quantity)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="card" style={{ position: 'relative', top: "65px" }}>
            <div className="card-body">
              <h5 className="card-title">Total Price</h5>
              <p className="card-text">₹ {calculateTotalPrice()}</p>
              <button className="btn btn-success mt-3" onClick={handleclickpay}>Proceed to Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
