import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Sign_img from "./Sign_img";
import { json } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Login from "./Login";

const Home = () => {

 const [inpVal,setInpVal] = useState({
    name : "",
    email : "",
    date : "",
    password : ""
 })
// const [data,setData] = useState("");
// console.log(inpVal)

  const getdata = (e) =>{
    // console.log(e.target.value);

    const {value,name} = e.target;
    // console.log(name,value);

    setInpVal(()=>{
        return {
            ...inpVal,
            [name]:value
        }
    })
}


const addData = (e) =>{
  e.preventDefault();

  

  const {name,email,date,password} = inpVal;
    
  if(name == ""){
    alert('name field is required')
  }else if(email == ""){
    alert('email field is required')
  }else if(!email.includes('@')){
    alert('it is not valid email id')
  }else if(date == ""){
    alert('date field is required')
  }else if(password == ""){
    alert('password field is required')
  }else if(password.length < 5){
    alert('password should be must be greater 5 character')
  }else{
    alert('registration succesfully');
    console.log(inpVal);

    //overtie data in localstorage
    //localStorage.setItem("registration",JSON.stringify([...inpVal]))

    const existingData = JSON.parse(localStorage.getItem("registration")) || [];

    // Merge existing data with new registration
    const updatedData = [...existingData, inpVal];

    // Update local storage with merged data
    localStorage.setItem("registration", JSON.stringify(updatedData));
  }
}

  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 pd-3" style={{width:"100%"}}>
            <h3 className="text-center mt-5 col-lg-4">Sign Up</h3>

            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter Your Email" />
              </Form.Group>
                
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="date" name="date" onChange={getdata}  />
              </Form.Group>
              
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
              </Form.Group>
              
              <Button variant="primary" className="col-lg-3" type="sub" onClick={addData}>
                Submit
              </Button>
            </Form>
            <p className="mt-3">Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
          </div>
          
          <Sign_img />

        </section>
      </div>
    </>
  );
};

export default Home;
