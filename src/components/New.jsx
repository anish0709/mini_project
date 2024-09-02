import React, { useState } from 'react'
import img1 from "../images/blue-8341156_1280.jpg";
import img2 from "../images/mexico-2086549_1280.jpg";
import img3 from "../images/sea-2601374_1280.jpg";
import img4 from "../images/sea-4839056_1280.jpg";
import img5 from "../images/tree-5149637_1280.jpg";
const New = () => {
    const [index, setindex] = useState(0);
    let imagearr = [img1, img2, img3, img4, img5];
    setInterval(() => {
        if(index<imagearr.length-1)
        setindex(index+1);
        else
        setindex(0);
    }, 2000);
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
        </>
    )
}

export default New