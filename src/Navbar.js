import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const Homepage = () => {
    navigate("/");
  };
  const Aboutpage = () => {
    navigate("/about");
  };
  return (
    <div style={{ width: "30%", margin: "10px auto" }}>
      <button style={{ padding: "15px", margin: "15px" }} onClick={Homepage}>
        Home
      </button>
      <button style={{ padding: "15px", margin: "15px" }} onClick={Aboutpage}>
        About
      </button>
    </div>
  );
};

export default Navbar;
