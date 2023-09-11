import React, { useState } from 'react'
import Modal from './Modal'
import axios from 'axios'
import { toast } from 'react-toastify'

const Table = ({data}) => {
  const [isId , setIsId] = useState()
  const [deta,setDeta] = useState({username:"", email:"", phonenumber:""})
  const onchange= (e)=>{
    setDeta({...deta,[e.target.name] : e.target.value})
  }
  let editContent =(data)=>{ 
  return  <><form>
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input
          placeholder="Username"
          value={data.username}
          name="username"
          onChange={onchange}
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">
        Email address
      </label>
      <input
        placeholder="Email"
        value={data.email}
        name="email"
        onChange={onchange}
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">
        Phone Number
      </label>
      <input
        placeholder="Phone Number"
        value={data.phonenumber}
        name="phonenumber"
        onChange={onchange}
        type="tel"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>
    </form>

    </>
  }

  const deleteData =async()=>{
    await axios({
      method: "DELETE",
      url : "http://localhost:9999/deleteData/" +isId,
      headers : {"Content-Type": "application/json"},
    
    }).then((res) =>{
      if(res.data){
        toast(res.data.message)
      }
    }).catch(() =>{
      toast("Something went wrong")
    })
  }

  const editdata =async(e)=>{
    e.preventDefault()
   if(deta.username && deta.email && deta.phonenumber){
    await axios({
      method: "PUT",
      url : "http://localhost:9999/updateUser/" + isId,
      headers : {"Content-Type": "application/json"},
      data : {username: deta.username,
      email:deta.email,
    phonenumber: deta.phonenumber}
    }).then((res) =>{
      toast(res.data.message )
    })
   }else{
    toast("All parameters are required")
   }
  }

  return (
   <>{
data &&  <div className='w-75' >
<table class="table table-striped">
<thead>
<tr>
<th scope="col">Sc.No</th>
<th scope="col">UserName</th>
<th scope="col">Email</th>
<th scope="col">PhoneNumber</th>
<th scope="col"></th>
<th scope="col"></th>

</tr>
</thead>
<tbody>
{
  data.map((data, index)=>{
    return <tr>
    <th scope="row">{index + 1}</th>
    <td>{data.username}</td>
    <td>{data.email}</td>
    <td>{data.phonenumber}</td>
    <td><button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={()=>{setDeta(data)
    setIsId(data._id)}}>Edit</button></td>
    <td><button className='btn btn-danger btn-sm' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={()=>setIsId(data._id)}>Delete</button></td>
    </tr>
  })
}

</tbody>
</table>
<Modal mid={"exampleModal"} btnName={"primary"} btn={"Update"} mTitle={"Update User"} mContent={editContent(deta)} func={editdata}/>
<Modal mid={"deleteModal"} btnName={"danger"} btn={"Delete"} mTitle={"Delete User"} mContent={"Are you sure you want to delete"} func={deleteData}/>
</div>
   }</>
  )
}

export default Table
