import React from "react";
import "./CustomPopUp.css";
import { useSelector } from "react-redux";
const CustomPopUp = ({ id, setShowpopup }) => {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((user) => user.id === id);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="details">
          <h4>Name: {singleUser[0].name}</h4>
          <h4>Email: {singleUser[0].email}</h4>
          <h4>Age: {singleUser[0].age}</h4>
          <h4>Gender: {singleUser[0].gender}</h4>
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => setShowpopup(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomPopUp;
