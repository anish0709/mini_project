import React, { useState } from 'react';
import item from "./product.json";

const Search1 = () => {
  const [product, setProduct] = useState("");
  const [productAfterSearch, setProductAfterSearch] = useState([]);

  const handleChange = (e) => {
    setProduct(e.target.value);
  };

  const handleClick = () => {
    const searchTerm = product.toLowerCase().trim();
    let searchedProducts = item.filter((e) =>
      e.name.toLowerCase().includes(searchTerm) ||
      e.brand.toLowerCase().includes(searchTerm) ||
      e.price.toString() === searchTerm 
    );

    if (searchedProducts.length > 0) {
      setProductAfterSearch(searchedProducts);
    } else {
      setProductAfterSearch(["notmatched"]);
    }
  };

  return (
    <>
      <div className='container w-25 bg-light shadow border my-5 py-3 text-center'>
        <input type='text' value={product} onChange={handleChange} />
        <button className='btn btn-danger btn-sm' onClick={handleClick}>Search</button>
      </div>

      <div className='container w-25 bg-light shadow border text-center my-5 py-3'>
        <ol>
          {item.map((e, i) => (
            <li key={i}>
              <p>Name: {e.name}</p>
              <p>Brand: {e.brand}</p>
              <p>Price: {e.price}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="container w-50 bg-light shadow border text-center my-5 py-3">
        {productAfterSearch.length === 0 && <p>No products found</p>}
        <ol>
          {productAfterSearch.map((e, i) => (
            <li key={i}>
              {e === "notmatched" ? <p>Not matched</p> :
                <>
                  <p>Name: {e.name}</p>
                  <p>Brand: {e.brand}</p>
                  <p>Price: {e.price}</p>
                </>
              }
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Search1;
