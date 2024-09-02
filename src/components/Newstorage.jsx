import React from 'react'

const Newstorage = () => {
    let obj1 = {
        name:"aaa", 
        age: 21
    }
    let arr =[
        {
            name:"aaa", 
            age: 21
        },
        {
            name:"ccc", 
            age: 21
        }
    ]
    const storage =()=>{
        localStorage.setItem("data1", "this");
        localStorage.setItem("myobj", JSON.stringify(obj1));
    }
  return (
    <>
    <button className='btn btn-primary' onClick={storage}>setdata</button>
    <button className='btn btn-success' onClick={storage}>getdata</button>
    </>
  )
}

export default Newstorage