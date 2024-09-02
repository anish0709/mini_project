import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const Form2 = () => {
    const [index, setindex] = useState();
    const [data, setdata] = useState({name:"", email:"", phone:"", password:"", confirm:""})
    const [btn, setbtn] = useState("submit")
    const [err,seterr] = useState({});
    // const [enterdata, showenterdata] = useState(false);
    const [array, setarray] = useState([]);
    let emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let passwordreges = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    console.log(data);
    const handlechange = (e)=>{
        console.log(e.target.name,e.target.value);
        setdata({...data, [e.target.name]:e.target.value})
    }

    const handleclick = ()=>{
        if(verify())
        {
            if(btn=="submit")
            {
        // alert("okkkkk");
            let copyarray = [...array];
            let copyarraywithdata = copyarray.concat(data);
            setarray(copyarraywithdata);
            }
            else
            {
                let copyarray = [...array];
                copyarray[index] = data;
                setarray(copyarray);
                setbtn("submit");
            }
            setdata({name:"", email:"", phone:"", password:"", confirm:""})
        }
    }

    const verify = ()=>{
        let localerr = {}
        let valid = true;
        if(data.name.length===0)
        {   
            localerr.name = "name is required";
            valid = false;
        }
        else if(data.name.length<5)
        {
            localerr.name = "name must be min 5 characters";
            valid = false;
        }

        if(data.email.length===0)
        {   
            localerr.email = "email is required";
            valid = false;
        }
        else if(!emailregex.test(data.email))
        {
            localerr.email = "invalid email";
            valid = false;
        }

        if(data.phone.length===0)
        {   
            localerr.phone = "phone is required";
            valid = false;
        }
        else if(data.phone.length!==10)
        {
            localerr.phone = "invalid phone"
            valid = false;
        }

        if(data.password.length===0)
        {   
            localerr.password = "password is required";
            valid = false;
        }
        else if(!passwordreges.test(data.password))
        {
            localerr.password = "invalid password"
            valid = false;
        }

        if(data.confirm.length===0)
        {
            localerr.confirm = "confirm password is required"
            valid = false;
        }
        else if(data.password !== data.confirm)
        {
            localerr.confirm = "password and confirm password must be same"
            valid = false;
        }  
        seterr(localerr);
        return valid; 
    }
    const handledelete=(i)=>{
        // console.log(i);
        let copyarray = [...array];
        copyarray.splice(i, 1);
        setarray(copyarray);
    }

    const handleedit = (e, i) =>{
        setindex(i);
        setdata({name:e.name, email:e.email, phone:e.phone, password:e.password, confirm:e.confirm})
        setbtn("update");
    }

  return (
    <>
    <h3 className='text-center text-danger'>my form 2</h3>

<div className='container bg-info py-4 my-2 text-center w-25'>
    <div className='mb-3'>
        <label htmlFor=''>Name:</label><br/>
        <input type='text' className='form-control'name='name' value ={data.name} onChange={handlechange}/>
    </div>
    {err.name && <p>{err.name}</p>}

    <div className='mb-3'>
        <label htmlFor=''>Email:</label><br/>
        <input type='text' className='form-control' name='email' value={data.email} onChange={handlechange}/>
    </div>
    {err.email && <p>{err.email}</p>}

    <div className='mb-3'>
        <label htmlFor=''>phone no:</label><br/>
        <input type='text' className='form-control' name='phone' value={data.phone} onChange={handlechange}/>
    </div>
    {err.phone && <p>{err.phone}</p>}

    <div className='mb-4'>
        <label htmlFor=''>Password:</label><br/>
        <input type='text' className='form-control' name='password' value={data.password} onChange={handlechange}/>
    </div>
    {err.password && <p>{err.password}</p>}

    <div className='mb-4'>
        <label htmlFor=''>confirm Password:</label><br/>
        <input type='text' className='form-control' name='confirm' value={data.confirm} onChange={handlechange}/>
    </div>
    {err.confirm && <p>{err.confirm}</p>}

    <button className='btn btn-danger mt-3' onClick={handleclick}>{btn}</button>
</div>


<table class="table">
<thead>
<tr>
  <th scope="col">sr. no.</th>
  <th scope="col">name</th>
  <th scope="col">email</th>
  <th scope="col">phone</th>
  <th scope="col">password</th>
  <th scope="col">confirm password</th>
  <th scope="col">delete</th>
  <th scope="col">edit</th>


</tr>
</thead>
<tbody>
    {
        array.map((e,i)=>{
            return(
                <>
                <tr>
                    <th scope="row">{i+1}</th>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{e.password}</td>
                    <td>{e.confirm}</td>
                    <td><button className='btn btn-danger btn-sm' onClick={()=>handledelete(i)}><MdDelete /></button></td>
                    <td><button className='btn btm-info btn-sm' onClick={()=>handleedit(e, i)}><MdEdit /></button></td>
                </tr>
                </>
            )
        })
    }
</tbody>
</table>
    </>
  )
}

export default Form2