import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/Slice/userDetailSlice";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [users, setUser] = useState({});
  const navigate = useNavigate();
  const getUserData = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
    // console.log(users);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(users);
    dispatch(createUser(users));
    navigate("/read");
  };
  return (
    <div className="d-flex justify-content-center">
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your Name..."
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email Id"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            placeholder="Enter your Age"
            onChange={getUserData}
          />
        </div>

        <div className="d-flex gap-3 my-2">
          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              onChange={getUserData}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              id="female"
              onChange={getUserData}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
