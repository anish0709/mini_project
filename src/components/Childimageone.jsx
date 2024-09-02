import React, { useEffect, useState } from 'react'

const Childimageone = ({ setimageUrl }) => {
    const [imageArray, setimageArray] = useState([])


    const handelchange = (e) => {
        // console.log(URL.createObjectURL(e.target.files[0]))
        let url = URL.createObjectURL(e.target.files[0])

        let aaa = [...imageArray]
        let bbb = aaa.concat(url)
        setimageArray(bbb)
        localStorage.setItem("url", JSON.stringify(bbb))
    }

    const handelclick = (e) => {
        setimageUrl(e)
    }

    useEffect(() => {
        let aaa = JSON.parse(localStorage.getItem("url")) || []
        setimageArray(aaa)
    }, [])
    return (
        <>
            <div className='container w-25 bg-light shadow border py-5 mt-3 mb-5 text-center'>
                <input type="file" onChange={handelchange} />
            </div>

            <div className='d-flex justify-content-evenly flex-wrap'>
                {imageArray.map((e, i) => {
                    return (
                        <>
                            <div className='m-4'>
                                <img src={e} alt="" width={"300px"} height={"300px"} className='rounded' onClick={() => handelclick(e)} />
                            </div>
                        </>
                    )
                })}
            </div>

        </>)
}

export default Childimageone