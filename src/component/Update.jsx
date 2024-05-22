import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../redux/Slice/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState({});
  const navigate = useNavigate();
  const { loading, users } = useSelector((state) => state.app);
  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);
  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }
  // console.log(updateData);
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
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email Id"
            onChange={newData}
            value={updateData && updateData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            placeholder="Enter your Age"
            onChange={newData}
            value={updateData && updateData.age}
          />
        </div>

        <div className="d-flex gap-3 my-2">
          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={updateData && updateData.gender === "Male"}
              onChange={newData}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              id="female"
              checked={updateData && updateData.gender === "Female"}
              onChange={newData}
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

export default Update;
