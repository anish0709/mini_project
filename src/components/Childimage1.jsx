import React from 'react'

const Childimage1 = ({myurl, setShowChild}) => {
  return (
    <>
    <div>Childimage2</div>
    <img src={myurl} alt='' height={300} width={400}  onClick={()=>{setShowChild(true)}}/>
    </>
  )
}

export default Childimage1