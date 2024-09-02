import React from 'react'
import { useState } from 'react';
const Form1 = () => {
    const[name, setname] = useState("");
    const[email, setemail] = useState("");
    const[password, setpassword] = useState("");
    const[first, setfirst] = useState(false)
    const[showdata, setshowdata] = useState(false)
    let emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let passwordreges = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    const handlename = (e)=>{
        setname(e.target.value);
    }
    const handleemail=(e)=>{
        setemail(e.target.value);
    }
    const handlepassowrd=(e)=>{
        setpassword(e.target.value);
    }
    const handleclick = ()=>{
        setfirst(true);
        if(name.length>=4 && emailregex.test(email) && passwordreges.test(password))
        setshowdata(true)
    }
  return (
    <>
    <h3 className='text-center text-danger'>my form 1</h3>

    <div className='container bg-info py-4 my-5 text-center'>
        <div className='mb-3'>
            <label htmlFor=''>Name:</label><br/>
            <input type='text' className='form-control' onChange={handlename}/>
        </div>
        {first && name.length===0 && <p>enter your name first</p>}
        {first && name.length>0 && name.length<4 && <p>name must be min 4 characters</p>}

        <div className='mb-3'>
            <label htmlFor=''>Email:</label><br/>
            <input type='text' className='form-control' onChange={handleemail}/>
        </div>
        {first && email.length===0 && <p>enter your email first</p>}
        {first && email.length>0 && !emailregex.test(email) && <p>invalid email</p>}

        <div className='mb-4'>
            <label htmlFor=''>Password:</label><br/>
            <input type='text' className='form-control' onchange = {handlepassowrd}/>
        </div>
        {first && password.length===0 && <p>enter your passowrd first</p>}
        {first && password.length>0 && !passwordreges.test(password) && <p>invalid password</p>}

        <button className='btn btn-danger mt-3' onClick = {handleclick}>submit</button>
    </div>


    <table class="table">
  <thead>
    <tr>
      <th scope="col">sr. no.</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">passowrd</th>
    </tr>
  </thead>
  <tbody>
  {showdata && <tr>
      <th scope="row">1</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{password}</td>
    </tr>}
  </tbody>
</table>
    </>
  )
}

export default Form1