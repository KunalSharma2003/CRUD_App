import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchUser } from "../redux/Slice/userDetailSlice";
const NavBar = () => {
  const count = useSelector((state) => state.app.users);
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="read">
                  All Post({count.length})
                </Link>
              </li>
            </ul>
          </div>
          <input
            className="form-control w-50 "
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchData(e.target.value)}
          ></input>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
