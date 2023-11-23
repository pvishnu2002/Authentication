import React from "react";
import sign from '../images/sign.jpg'


const Sign_img = () => {
  return (
    <>
      <div className="right_data mt-3" style={{ width: "100%" }}>
        <div className="sign_img mt-3">
          <img src={sign} style={{ maxWidth: "480px" }} />
        </div>
      </div>
    </>
  );
};
export default Sign_img