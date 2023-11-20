import React from "react";
import "../Components css/Project.css";
import { NavLink } from "react-router-dom";
function Project() {
  return (
    <>
      <div className="project-container">
        <h1 style={{ textAlign: "center" }}>Project Section</h1>
        <div className="project-section">
          <div className="project">
            <div className="item">
              <h2>Project 1</h2>
            </div>
            <div className="link-section-1">
              <NavLink
                to={"https://github.com/mohnish183/Tindog"}
                target="_blank"
              >
                Git Reposetory link
              </NavLink>
              <NavLink
                to={"https://mohnish183.github.io/Tindog/"}
                target="_blank"
              >
                Project link
              </NavLink>
            </div>
          </div>
          <div className="project">
            <div className="link-section-2">
              <NavLink
                to={"https://github.com/mohnish183/GuessMyNumber"}
                target="_blank"
              >
                Git Reposetory link
              </NavLink>
              <NavLink
                to={"https://mohnish183.github.io/GuessMyNumber/"}
                target="_blank"
              >
                Project link
              </NavLink>
            </div>
            <div className="item2 ">
              <h2>Project 2</h2>
            </div>
          </div>
          <div className="project">
            <div className="item">
              <h2>Project 3</h2>
            </div>
            <div className="link-section-1">
              <NavLink
                to={
                  "https://github.com/mohnish183/mohnish183-Project_3_ReminderClockApp"
                }
                target="_blank"
              >
                Git Reposetory link
              </NavLink>
              <NavLink
                to={
                  "https://mohnish183.github.io/mohnish183-Project_3_ReminderClockApp/"
                }
                target="_blank"
              >
                Project link
              </NavLink>
            </div>
          </div>
          <div className="project">
            <div className="link-section-2">
              <NavLink
                to={"https://github.com/mohnish183/ToDoApp-JS"}
                target="_blank"
              >
                Git Reposetory link
              </NavLink>
              <NavLink
                to={"https://mohnish183.github.io/ToDoApp-JS/"}
                target="_blank"
              >
                Project link
              </NavLink>
            </div>
            <div className="item2 ">
              <h2>Project 4</h2>
            </div>
          </div>
          <div className="project">
            <div className="item">
              <h2>Project 5</h2>
            </div>
            <div className="link-section-1">
              <NavLink
                to={"https://github.com/mohnish183/BlogPage"}
                target="_blank"
              >
                Git Reposetory link
              </NavLink>
              <NavLink
                to={"https://blog-page-vert.vercel.app/#"}
                target="_blank"
              >
                Project link
              </NavLink>
            </div>
          </div>
          <div className="project">
            <div className="link-section-2">
              <NavLink>Git Reposetory link</NavLink>
              <NavLink>Project link</NavLink>
            </div>
            <div className="item2 ">
              <h2>Project 6</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
