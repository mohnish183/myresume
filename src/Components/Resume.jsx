import React from "react";
import "../Components css/Resume.css";
import resume from "../Image/mohnish.jpg";
import { NavLink } from "react-router-dom";
import "../Components css/Home.css";
function Resume() {
  const moreInfo = () => {
    console.log("hello");
  };
  return (
    <>
      <div className="container-resume">
        <img
          className="resume-img"
          src={resume}
          alt=""
          width={"150px"}
          height={"140vh"}
        />
        <div className="info-section">
          <div className="name-section">
            <h1>Mohnish</h1>
            <p>
              To be a part of the reputed Organization where I get challenges as
              well as opportunity to explore my skill and learn new thing
            </p>
          </div>
          <div className="edu-section">
            <h2>Education</h2>
            <hr />
            <div className="college">
              <h3>Btech</h3>
              <p>Poornima Group of Institututions (RTU)</p>
              <p>Year : 2016 - 2020</p>
              <p>From : Jaipur , Rajasthan</p>
              <p>Stream : Computer Science</p>
              <p>Marks secured : 67.92%</p>
            </div>
            <div className="sen-secondary-school">
              <h3>Senior Secondary Educations</h3>
              <p>Delhi Model Public School</p>
              <p>Year : 2015 - 2016</p>
              <p>From : Patna,Bihar</p>
              <p>Stream : Science</p>
            </div>
            <div className="secondary-school">
              <h3>Secondary Education</h3>
              <p>kendriya vidyalaya</p>
              <p>Year : 2013 - 2014</p>
              <p>From : Motihari,Bihar</p>
              <p>Stream : Board</p>
              <p>Marks secured : 8.6 CGPA </p>
            </div>
          </div>
          <div className="work-exp">
            <h2>Work Experience</h2>
            <hr />
            <p>Designation : System Engineer</p>
            <p>Company : Q3 Technology</p>
            <p>Year : 2020-2021</p>
            <p>From : Jaipur , Rajasthan</p>
            <button type="button" className="more-info-btn" onClick={moreInfo}>
              More Info
            </button>
          </div>
          <div className="intern-section">
            <h2>InternShip</h2>
            <hr />
            <p>Prep-Bytes</p>
            <p>Enrolled: Full-Stack developer </p>
            <p>Year : 2023- ongoing</p>
            <NavLink to="https://www.prepbytes.com/" target="_blank">
              {" "}
              PrepBytes Website
            </NavLink>
          </div>
          <div className="certificate-section">
            <h2>Certificate</h2>
            <hr />
            <p>C++ training certiﬁcates conduct by IIT Bombay (2017) </p>
            <p>Linux training certiﬁcates conduct by IIT Bombay (2017)</p>
            <p>C (level 2) certiﬁcate conduct by Ranksheet (2019)</p>
            <p>PHP (level 1) certiﬁcate conduct by Ranksheet (2019)</p>
            <p> HTML (level1) certiﬁcate conduct by Ranksheet (2019)</p>
          </div>
          <div className="skill-section">
            <h2>Skill</h2>
            <hr />

            <table className="skill-table">
              <tr>
                <th>Domain</th>
                <th>Domain</th>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://www.pngmart.com/files/23/React-Logo-PNG-File.png"
                    alt="not found"
                    height={"80vh"}
                    width={"100vw"}
                  />
                </td>
                <td>
                  <img
                    src="https://cobaltoconsulting.com/wp-content/uploads/2019/09/javascript-logo.png"
                    alt=""
                    height={"60vh"}
                    width={"100vw"}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <img
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911339/html5-icon-icon-md.png"
                    alt="not found"
                    height={"60vh"}
                    width={"100vw"}
                  />
                </td>
                <td>
                  <img
                    src="https://thumbs.dreamstime.com/b/css-code-icon-isolated-white-background-flat-style-css-code-icon-isolated-white-background-flat-style-css-code-symbol-212550800.jpg"
                    alt=""
                    height={"80vh"}
                    width={"100vw"}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://www.pngkey.com/png/full/142-1424654_we-help-you-to-solve-any-issues-or.png"
                    alt=""
                    height={"60vh"}
                    width={"80vw"}
                  />
                </td>
                <td>
                  {" "}
                  <img
                    height={"60vh"}
                    width={"100vw"}
                    src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
                    alt="git"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    height={"60vh"}
                    width={"80vw"}
                    src="https://icon-library.com/images/letter-c-icon/letter-c-icon-22.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <img
                    height={"60vh"}
                    width={"80vw"}
                    src="https://cdn.pixabay.com/photo/2021/12/06/13/38/c-6850391_1280.png"
                    alt=""
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="project-section">
            <h2>Project</h2>
            <hr />
            <p>CLOCK REMINDER APP (2023)</p>
            <NavLink
              to={
                "https://mohnish183.github.io/mohnish183-Project_3_ReminderClockApp/"
              }
              target="_blank"
            >
              Link of Project
            </NavLink>
            <p>TODO APP (2023)</p>
            <NavLink
              to={"https://mohnish183.github.io/ToDoApp-JS/"}
              target="_blank"
            >
              Link of Project
            </NavLink>
          </div>
          <div className="paper-section">
            <h2>Paper Presented</h2>
            <hr />
            <p>Load Balancing in Cloud Computing (2020)</p>
            <p>( ICIMMI Conference )</p>
            <NavLink to={""} target="_blank">
              Link of Paper
            </NavLink>
            <p>
              Effect on Indian Stock Market and Trade War Between China and
              America (2018)
            </p>
            <p>( IJAMTES Conference )</p>
            <NavLink
              to={"https://ijamtes.org/gallery/44.cse%20-%20ijmte.pdf"}
              target="_blank"
            >
              Link of Paper
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
