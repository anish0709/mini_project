import React, { useState } from 'react'
import img1 from "../images/blue-8341156_1280.jpg";
import img2 from "../images/mexico-2086549_1280.jpg";
import img3 from "../images/sea-2601374_1280.jpg";
import img4 from "../images/sea-4839056_1280.jpg";
import img5 from "../images/tree-5149637_1280.jpg";
const Slider = () => {
    const [index, setindex] = useState(0);
    let imagearr = [img1, img2, img3, img4, img5];
    const handleprevious = ()=>{
        if(index>0)
        setindex(i);
        else
        setindex(imagearr.length-1);
    }
    const handlenext =()=>{
        if(index<imagearr.length-1)
        setindex(index+1);
        else
        setindex(0);
    }
    const handleclick =(i)=>{
        setindex(i);
    }
    return (
        <>
            {
                imagearr.map((e, i) => {
                    return (
                        <div className='container text-center mt-4'>
                            {i === index && <img src={e} alt='' width={"450px"} height={"310px"} className='rounded' />}
                        </div>
                    )
                })
            }
            <div className='container text-center'>
                <button onClick={handleprevious} className='btn btn-danger' style ={{position:'relative', top:'-150px', left:'-270px'}}>&lt;</button>
                <button onClick={handlenext}className='btn btn-danger' style ={{position:'relative', top:'-150px', left:'270px'}}>&gt;</button>
            </div>

            <div className='d-flex justify-content-center gap-5'>
            {
                imagearr.map((e, i) => {
                    return (
                        <img src={e} alt='' width={i===index?"70px" : "50px"} height={"50px"} className='rounded' onClick={()=>handleclick(i)} style={{border: `${i===index?"2px solid black":""}`, cursor:'pointer'}}/>
                    )
                })
            }
            </div>

            <div className='d-flex justify-content-center gap-5' style={{position:'relative', top:'-100px'}}>
            {
                imagearr.map((e, i) => {
                    return (
                        // <img src={e} alt='' width={i===index?"70px" : "50px"} height={"50px"} className='rounded' onClick={()=>handleclick(i)} style={{border: `${i===index?"2px solid black":""}`, cursor:'pointer'}}/>
                        <span style={{fontSize:"100px", cursor:'pointer'}} onClick={()=>handleclick(i)}></span>
                    )
                })
            }
            </div>
        </>
    )
}

export default Slider