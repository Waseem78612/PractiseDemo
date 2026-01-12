import React from "react";
import { FaStar } from "react-icons/fa";
import img1 from "./images/avatar.jpg";
export default function Avatar() {
  const [details, setDetails] = React.useState({
    firstName: "Waseem",
    lastName: "Sajjad",
    phone: "+92-3483039",
    email: "Wa@gmail.com",
    isContact: false,
  });

  return (
    <>
      .<h1>Avatar</h1>
      <div className="CardContainer">
        <div className="Card">
          <div className="ImageSection">
            <img src={img1} alt="" />
          </div>
          <div className="StarContainer">
            <FaStar size={30} color="#FFFFFF" className="star" />
          </div>
          <div className="DetailsSection">
            <h3 className="userName">
              {details.firstName} {details.lastName}
            </h3>
            <div className="userDetails">
              <p>{details.phone}</p>
              <p>{details.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
