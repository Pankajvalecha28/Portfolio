import React, { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";

const Login = () => {
  const [Data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });
  const onchange= (e)=>{
    setData({...Data,[e.target.name] : e.target.value})
  }
  const handleData =async(e)=>{
    e.preventDefault()
   if(Data.firstname && Data.lastname && Data.email && Data.phonenumber){
    await axios({
      method: "POST",
      url : "http://localhost:9999/CreateUser",
      headers : {"Content-Type": "application/json"},
      data : {username: Data.firstname+Data.lastname,
      email:Data.email,
    phonenumber: Data.phonenumber}
    }).then((res) =>{
      setData({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
      })
      toast(res.data.message )
    })
   }else{
    toast("All parameters are required")
   }
  }
  return (
    <div className="border p-4" style={{ width: "450px" }}>
      <p className="display-4 text-center mb-4">Add Details</p>
      <form onSubmit={handleData}>
        <div className="d-flex gap-3">
          <div class="mb-3">
            <label class="form-label">First Name</label>
            <input
              placeholder="First Name"
              value={Data.firstname}
              name="firstname"
              onChange={onchange}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Last Name</label>
            <input
              placeholder="Last Name"
              value={Data.lastname}
              name="lastname"
              onChange={onchange}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            placeholder="Email"
            value={Data.email}
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
            value={Data.phonenumber}
            name="phonenumber"
            onChange={onchange}
            type="tel"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
