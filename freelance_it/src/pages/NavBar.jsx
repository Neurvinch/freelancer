import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios"; // ✅ Added missing import

const NavBar = () => {
  const [role, setRole] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decode = jwtDecode(token);
      if (decode?.role) {
        setRole(decode.role);
      }
    } catch (error) {
      console.log("Error decoding token:", error);
      navigate("/login"); // Handle invalid token
    }
  }, [navigate]); // ✅ Added navigate dependency

  const handleSignout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("/signout");
      if (res.data.success) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  const renderLinks = () => {
    if (role === "client") {
      return (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/job-create">Create Job</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/client/jobs">My Jobs</Link>
          
          <Link to="/signout" onClick={handleSignout}>
            Signout
          </Link>
        </>
      );
    } else if (role === "freelancer") {
      return (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/jobs/:id/proposal">My Proposals</Link>
          <Link to="/proposal/:id/edit">Edit Proposals</Link>
          <Link to="/signout" onClick={handleSignout}>
            Signout
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signout" onClick={handleSignout}>
            Signout
          </Link>
        </>
      );
    }
  };

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <div className="logo">My App</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {renderLinks()}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
