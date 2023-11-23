import React, { useEffect, useState } from "react";
import './style.css';

const UserData = () => {

  
  const [data, setData] = useState([]);

  useEffect(() => {
    const userdata = localStorage.getItem("registration");
    if (userdata) {
      const parseData = JSON.parse(userdata);
      setData(parseData);
    }
  }, []);
  return (
    <>
      <h2>UserData</h2>
      <table border={1}>
        <tr>
          <th>No.</th>
          <th>User Name</th>
          <th>Email</th>
          <th>BOD</th>
        </tr>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.date}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default UserData;
