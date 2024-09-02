import React, { useState, useEffect } from 'react';
import Sellerform from './Sellerform';
import { MdDelete, MdEdit } from 'react-icons/md';
import "../../Seller/Sellercomponents/admin.css";

const AdminPanel = () => {
  const [showForm, setShowForm] = useState(false);
  const [showProductsTable, setShowProductsTable] = useState(true);
  const [editItem, setEditItem] = useState(null);
  const [sellerItems, setSellerItems] = useState([]);

  useEffect(() => {
    // Fetch seller items from localStorage on component mount
    const storedItems = JSON.parse(localStorage.getItem("seller_items")) || [];
    setSellerItems(storedItems);
  }, []);

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem("seller_items", JSON.stringify(items));
  };

  const handleDelete = (index) => {
    const updatedItems = [...sellerItems];
    updatedItems.splice(index, 1);
    setSellerItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
  };

  const handleEdit = (item, index) => {
    setEditItem({ ...item, index }); // Set item to edit and its index
    setShowForm(true);
    setShowProductsTable(false);
  };

  const handleAddNewProduct = () => {
    setEditItem(null); // Clear edit item
    setShowForm(true);
    setShowProductsTable(false);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setShowProductsTable(true);
  };

  const handleFormSubmit = (formData) => {
    let updatedItems = [...sellerItems];

    if (editItem !== null) {
      // Editing existing item
      updatedItems[editItem.index] = formData;
    } else {
      // Adding new item
      updatedItems.push(formData);
    }

    setSellerItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
    handleFormClose(); // Close form after submit
  };

  return (
    <>
      <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
        <ul className="nav flex-column text-white w-100">
          <li className="nav-item">
            <a href="#" className="nav-link h3 text-white my-2">
               <br />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={handleAddNewProduct}>
              <i className="bx bx-user-check"></i>
              <span className="mx-2">Add New Product</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={() => { setShowProductsTable(true); setShowForm(false); }}>
              <i className="bx bx-conversation"></i>
              <span className="mx-2">View All Products</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="bx bx-user-check"></i>
              <span className="mx-2">Contact Us</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="bx bx-user-check"></i>
              <span className="mx-2">About Us</span>
            </a>
          </li>
        </ul>

        <span className="nav-link h4 w-100 mb-5">
          <a href=""><i className="bx bxl-instagram-alt text-white"></i></a>
          <a href=""><i class="bx bxl-twitter px-2 text-white"></i></a>
          <a href=""><i class="bx bxl-facebook text-white"></i></a>
        </span>
      </div>

      {/* Main Wrapper */}
      <div className="p-1 my-container active-cont">
        {/* Top Nav */}
        <nav className="navbar top-navbar navbar-light bg-light px-5">
          <a className="btn border-0" id="menu-btn"><i className="bx bx-menu"></i></a>
        </nav>
        {/* End Top Nav */}
        <h3 className="text-dark p-3">WELCOME TO THE ADMIN PANEL OF ECOM EXPRESS 💻 📱</h3>
        
        {showForm && <Sellerform editItem={editItem} onSubmit={handleFormSubmit} onClose={handleFormClose} />}

        {showProductsTable && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">sr. no.</th>
                <th scope="col">Item title</th>
                <th scope="col">Item description</th>
                <th scope="col">Image src</th>
                <th scope="col">Item price</th>
                <th scope="col">Item color</th>
                <th scope="col">Item discount</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sellerItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.imagesrc}</td>
                  <td>{item.price}</td>
                  <td>{item.color}</td>
                  <td>{item.discount}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}><MdDelete /></button>
                    <button className="btn btn-info btn-sm ms-2" onClick={() => handleEdit(item, index)}><MdEdit /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default AdminPanel;
