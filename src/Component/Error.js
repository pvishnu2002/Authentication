import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Error = () => {

const navigate = useNavigate();
  return (
    <>
        <h1>404 Error ! Page not Found</h1>
        <Button onClick={()=>navigate('/login')}>Redirect Login page</Button>
    </>
  )
}

export default Error;