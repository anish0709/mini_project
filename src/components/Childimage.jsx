import React, { useEffect, useState } from 'react'
const Childimage = ({ setmyurl, setShowChild }) => {
    const [imagearay, setimagearay] = useState([]);

    const handleChange = async (e) => {
        const file = e.target.files[0];
        const base64String = await convertToBase64(file);
        const newArray = [...imagearay, base64String];
        setimagearay(newArray);
        localStorage.setItem("url", JSON.stringify(newArray));
    }
    
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }    
    

    const handleDelete = (url) => {
        let filteredArray = imagearay.filter(item => item !== url);
        setimagearay(filteredArray);
        localStorage.setItem("url", JSON.stringify(filteredArray));
    }

    const handleZoom =(url)=>{
        console.log(url);
        setmyurl(url);
        setShowChild(false);
    }

    useEffect(()=>{
        let c = JSON.parse(localStorage.getItem("url")) || [];
        setimagearay(c);
    }, []);

  return (
    <>
    <div className='container w-25 bg-light shadow border py-3 mb-5 text-center'>
    <input type='file' onChange={handleChange}/>
    </div>
    <div className='d-flex justify-content-evenly flex-wrap'>
    {
        imagearay.map((url, index) => (
            <div key={index} className='m-5 position-relative'>
            <img src={url} alt="" width={300} height={300} className='rounded' onClick={()=>{handleZoom(url)}}/>
            <button style={{position: 'absolute', top: 0, right: 0}} onClick={() => handleDelete(url)}>X</button>
            </div>
        ))
    }
    </div>
    </>
  )
}

export default Childimage
