import React from "react";
import { NavLink, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Resume from "./Resume";
import MyInfo from "./MyInfo";
import "../Components css/Header.css";
function Header() {
  return (
    <>
      <BrowserRouter>
        <div className="nav-class navbar navbar-dark navbar-expand-lg bg-dark supra">
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/project"}>Project</NavLink>
          <NavLink to={"/resume"}>Resume</NavLink>
          <NavLink to={"/my-info"}>My-Info</NavLink>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/my-info" element={<MyInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Header;
