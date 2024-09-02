import React, { useState } from 'react'
import Childimage from './Childimage'
import Childimage1 from './Childimage1';
const Parentimage = () => {
    // const [imageurl, setimageurl] = useState("this is mine");
    // const [myurl, setmyurl] = useState("");
    const [myurl, setmyurl] = useState("");
    const [showChild, setShowChild] = useState(true);
    console.log("first", myurl);
  return (
    <>
    {showChild ? <Childimage setmyurl={setmyurl} setShowChild = {setShowChild}/> : <Childimage1 myurl={myurl} setShowChild = {setShowChild}/>}
    {/* <Childimageone setmyurl={setmyurl} />
     <Childimagetwo myurl={myurl}/> */}
    </>
  )
}

export default Parentimage