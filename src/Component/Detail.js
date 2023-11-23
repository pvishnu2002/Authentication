import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const [logindata, setLoginData] = useState([]);

  var today = new Date().toISOString().slice(0, 10);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();


  const BirthDay = () => {
    const getUser = localStorage.getItem("login");

    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);

      setLoginData(user);

      const userBirth = logindata.map((element) => {
        return (element.date = today);
      });

      if (userBirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 2000);
      }
    }
  };

  const userlogout = () =>{
    localStorage.removeItem('login')
    navigate('/');
  }
  useEffect(() => {
    BirthDay();
  }, []);
  return (
    <>
      {logindata.length === 0 ? "error" : 
        <>
          <h1>Details Page</h1>
          <h3>{logindata[0].name}</h3>
          <Button onClick={userlogout}>LogOut</Button>

          {
          logindata[0].date === today ?
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{logindata[0].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Wish you many many happy return of the day
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal> : ""
        }
        </>
      }
    </>
  );
};

export default Detail;
