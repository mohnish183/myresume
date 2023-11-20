import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faMobileScreenButton,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import "../Components css/MyInfo.css";
function MyInfo() {
  return (
    <>
      <table className="info-table">
        <tr>
          <th colSpan={2}>My Info</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
          </td>
          <td className="font">
            {" "}
            <NavLink to={"mailto:mohnish.kr183@gmail.com"} target="_blank">
              mohnish.kr183@gmail.com
            </NavLink>
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <FontAwesomeIcon icon={faMobileScreenButton} className="font" />
          </td>
          <td>8005696010</td>
        </tr>
        <tr>
          <td>
            {" "}
            <FontAwesomeIcon icon={faCalendarDays} className="font" />
          </td>
          <td>27 June 1998</td>
        </tr>{" "}
        <tr>
          <td>
            {" "}
            <FontAwesomeIcon icon={faGithub} className="font" />
          </td>
          <td className="font">
            <NavLink to={"https://github.com/dashboard"} target="_blank">
              github.com/mohnish183
            </NavLink>
          </td>
        </tr>{" "}
        <tr>
          <td>
            {" "}
            <FontAwesomeIcon icon={faLinkedin} className="font" />
          </td>
          <td className="font">
            <NavLink
              to={"https://www.linkedin.com/in/mohnish-kumar-9575801a1/"}
              target="_blank"
            >
              linkedin.com/in/mohnish-kumar-9575801a1/
            </NavLink>
          </td>
        </tr>{" "}
        <tr>
          <td>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} className="font" />
          </td>
          <td>Bari-coperative bokaro ,Jharkhand</td>
        </tr>
      </table>

      <div className="info-section">
        <div className="info">
          <h2>About me :</h2>
          <div className="content">
            <p>
              My name is Mohnish. I have completed <em>btech</em> in
              <em> Computer science</em> from
              <em> Poornima Group of Institution, Jaipur, Rajasthan</em>. I am
              2020 passout graduate. I worked in Q3 technology as system
              engineer in jaipur, Where i get exposure to handle multiple
              project. I worked as a manual tester , technical assistence
              provider. I had worked in different tools like Asure, Aws ,
              Postman, some company testing tools, jira.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyInfo;
