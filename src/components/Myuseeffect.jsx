import React, { useState } from 'react'

const Myuseeffect = () => {
    const [first, setfirst] = useState(10);

    const click1 = () =>{
        setfirst(first+1);
        console.log(first);
    }
  return (
    <>
    <h1>{first}</h1>
    <button className='btn btn-danger' onClick={click1}></button>
    </>
  )
}

export default Myuseeffect