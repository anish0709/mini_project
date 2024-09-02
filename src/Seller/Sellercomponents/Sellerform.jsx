import React, { useState, useEffect } from 'react';

const Sellerform = ({ editItem, onSubmit, onClose }) => {
    const [data, setData] = useState({
        title: '',
        description: '',
        imagesrc: '',
        price: '',
        color: '',
        discount: '',
        category: '', // Step 1: Add category to state
    });

    const [btn, setBtn] = useState('list my product');
    const [err, setErr] = useState({});

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (editItem) {
            setData(editItem);
            setBtn('update');
        }
    }, [editItem]);

    const handleClick = () => {
        if (verify()) {
            onSubmit(data); // Call the onSubmit prop
            setData({
                title: '',
                description: '',
                imagesrc: '',
                price: '',
                color: '',
                discount: '',
                category: '', // Reset category field
            });
        }
    };

    const verify = () => {
        let localerr = {};
        let valid = true;

        if (data.title.length === 0) {
            localerr.title = "Title is required";
            valid = false;
        }

        if (data.description.length === 0) {
            localerr.description = "Description is required";
            valid = false;
        }

        if (data.imagesrc.length === 0) {
            localerr.imagesrc = "Image source is required";
            valid = false;
        }

        if (data.price.length === 0) {
            localerr.price = "Price is required";
            valid = false;
        }

        if (isNaN(data.price)) {
            localerr.price = "Price must be a number";
            valid = false;
        }

        if (data.color.length === 0) {
            localerr.color = "Color is required";
            valid = false;
        }

        if (isNaN(data.discount)) {
            localerr.discount = "Discount must be a number";
            valid = false;
        }

        if (data.category.length === 0) {
            localerr.category = "Category is required";
            valid = false;
        }

        setErr(localerr);
        return valid;
    };

    return (
        <>
            <h3 className="text-center text-danger">Home page for seller</h3>

            <div className="container bg-info py-4 my-2 text-center w-50 rounded">
                <div className="mb-3">
                    <label htmlFor="">Add Item title</label><br />
                    <input type="text" className="form-control" name="title" value={data.title} onChange={handleChange} />
                </div>
                {err.title && <p>{err.title}</p>}

                <div className="mb-3">
                    <label htmlFor="">Add Item description</label><br />
                    <input type="text" className="form-control" name="description" value={data.description} onChange={handleChange} />
                </div>
                {err.description && <p>{err.description}</p>}

                <div className="mb-4">
                    <label htmlFor="">Add image src</label><br />
                    <input type="text" className="form-control" name="imagesrc" value={data.imagesrc} onChange={handleChange} />
                </div>
                {err.imagesrc && <p>{err.imagesrc}</p>}

                <div className="mb-4">
                    <label htmlFor="">Add item price</label><br />
                    <input type="text" className="form-control" name="price" value={data.price} onChange={handleChange} />
                </div>
                {err.price && <p>{err.price}</p>}

                <div className="mb-4">
                    <label htmlFor="">Add item color</label><br />
                    <input type="text" className="form-control" name="color" value={data.color} onChange={handleChange} />
                </div>
                {err.color && <p>{err.color}</p>}

                <div className="mb-4">
                    <label htmlFor="">Add item discount (optional)</label><br />
                    <input type="text" className="form-control" name="discount" value={data.discount} onChange={handleChange} />
                </div>
                {err.discount && <p>{err.discount}</p>}

                <div className="mb-4"> {/* Step 2: Add category input field */}
                    <label htmlFor="">Add item category</label><br />
                    <input type="text" className="form-control" name="category" value={data.category} onChange={handleChange} />
                </div>
                {err.category && <p>{err.category}</p>}

                <button className="btn btn-danger mt-3" onClick={handleClick}>{btn}</button>
            </div>
        </>
    );
};

export default Sellerform;
