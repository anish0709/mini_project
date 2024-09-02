// import React, { useState } from 'react'

// const Homework = () => {
//     const [value, setvalue] = useState(0);
//   return (
//     <>
//     <input type='number' onChange={(e)=>setvalue(e.target.value)}/> plz enter digits only
//     <p>value is: {value}</p>
//     </>
//   )
// }

// export default Homework


// import React, { useState } from 'react';
// import { FiEyeOff, FiEye } from 'react-icons/fi'; // Import icons

// const Homework = () => {
//   const [value, setValue] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

//   return (
//     <>
//       <input 
//         type={showPassword ? 'text' : 'password'} 
//         value={value} 
//         onChange={(e) => setValue(e.target.value)} 
//       />
//       {showPassword ? 
//         <FiEye onClick={() => setShowPassword(false)} /> : 
//         <FiEyeOff onClick={() => setShowPassword(true)} />
//       }
//     </>
//   )
// }

// export default Homework;

// import React from 'react'

// const Homework = () => {
//   return (
//     <>
//         <select name='' id=''>
//             <option value={}></option>
//         </select>

//         <select name='' id=''>
//             <option value={}></option>
//         </select>
//     </>
//   )
// }

// export default Homework






import React, { useState, useEffect } from 'react';
import data from './State.json';

const Homework = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const stateNames = data.map(item => item.state);
    setStates(stateNames);
  }, []);

  useEffect(() => {
    const stateData = data.find(item => item.state === selectedState);
    if (stateData) {
      setCities(stateData.city);
    }
    // else {
    //   setCities([]);
    // }
  }, [selectedState]);

  return (
    <>
      <select name='' id='' onChange={(e) => setSelectedState(e.target.value)}>
        <option value='' disabled selected>Select a state</option>
        {states.map((state, index) => <option value={state}>{state}</option>)}
      </select>

      <select name='' id=''>
        <option value='' disabled selected>Select a city</option>
        {cities.map((city, index) => <option  value={city}>{city}</option>)}
      </select>
    </>
  )
}

export default Homework;


