import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Sign_img from "./Sign_img";
import { useNavigate } from "react-router-dom";

const Login = () => {

 const navigate = useNavigate();
  const [inpVal, setInpVal] = useState({
    email: "",
    password: "",
  });
  const getdata = (e) => {

    const { value, name } = e.target;
    // console.log(name,value);

    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();


    //get data from local storage
    const getuserArr = localStorage.getItem("registration");
    console.log(`localstorage data :- ${getuserArr}`)

    const { email, password } = inpVal;
    console.log(inpVal)


    if (email == "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("it is not valid email id");
    } else if (password == "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password should be must be greater 5 character");
    } else {
        if(getuserArr && getuserArr.length){
            const userdata = JSON.parse(getuserArr);
            const userlogin = userdata.filter((ele,k)=>{
                return ele.email === email && ele.password === password
            });
            console.log(userlogin);

            if(userlogin.length === 0){
                alert("Invalid details")
            }else{
                console.log("login sucesfully");

                localStorage.setItem("login",JSON.stringify(userlogin));
                navigate('/detail')
            }
        }
    }
  }

  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 pd-3" style={{ width: "100%" }}>
            <h3 className="text-center mt-5 col-lg-4">Sign In</h3>

            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter Your Email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-3"
                type="sub"
                onClick={addData}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account <span>SignIn</span>
            </p>
          </div>

          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Login;
