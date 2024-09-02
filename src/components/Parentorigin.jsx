import React, { useState } from 'react'
import Childimageone from './Childimageone'
import Childimagetwo from './Childimagetwo'

const Parentorigin = () => {
    const [imageUrl, setimageUrl] = useState("")

    // console.log("first", imageUrl)
    return (
        <>
            <Childimageone setimageUrl={setimageUrl} />
            <Childimagetwo imageUrl={imageUrl} />

        </>)
}

export default Parentorigin