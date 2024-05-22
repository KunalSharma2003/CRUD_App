import React, { useEffect, useState, useState1 } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser, showUser } from "../redux/Slice/userDetailSlice";
import CustomPopUp from "./CustomPopUp";
import { Link } from "react-router-dom";
const Read = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");
  const [showPopup, setShowpopup] = useState(false);
  useEffect(() => {
    dispatch(showUser());
  }, []);

  const { loading, users, searchData } = useSelector((state) => state.app);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="text-center">
      {showPopup && (
        <CustomPopUp
          id={id}
          showPopup={showPopup}
          setShowpopup={setShowpopup}
        />
      )}
      <div className=" my-4 ">
        <input
          className="form-check-input"
          name="gender"
          checked={radioData === ""}
          type="radio"
          id="all"
          onChange={(e) => setRadioData("")}
        />
        <label htmlFor="all" className="form-check-label mx-2">
          All
        </label>

        <input
          className="form-check-input"
          name="gender"
          id="male"
          checked={radioData === "Male"}
          value="Male"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label htmlFor="male" className="form-check-label mx-2">
          Male
        </label>

        <input
          className="form-check-input"
          name="gender"
          value="Female"
          id="female"
          checked={radioData === "Female"}
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label htmlFor="female" className="form-check-label mx-2">
          Female
        </label>
      </div>

      {users &&
        users
          .map((user) => {
            const username = user.name.toLowerCase();
            const searchname = searchData.toLowerCase();
            if (searchData.length === 0) {
              return user;
            } else if (username.includes(searchname)) {
              return username.includes(searchname);
            }
          })
          .filter((user) => {
            if (radioData === "Male") {
              return user.gender === radioData;
            } else if (radioData === "Female") {
              return user.gender === radioData;
            } else {
              return user;
            }
          })
          .map((user) => (
            <div
              className="card w-50 mx-auto my-3 text-center shadow-lg p-3 mb-5 bg-white rounded"
              key={user.id}
            >
              <div className="card-body ">
                <h5 className="card-title py-2 ">Name: {user.name}</h5>
                <h6 className="card-title py-1">Email: {user.email}</h6>

                <h6 className="card-title py-1">Gender: {user.gender}</h6>
                <button
                  className="btn btn-primary mx-2 my-2"
                  onClick={() => [setShowpopup(true), setId(user.id)]}
                >
                  View
                </button>
                <Link
                  to={`/edit/${user.id}`}
                  className=" btn btn-info mx-2 my-2 "
                >
                  Edit
                </Link>
                <button
                  onClick={() => dispatch(DeleteUser(user.id))}
                  className="btn btn-danger mx-2 my-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Read;
