import React from "react";
import myimage from "../Image/DSC02408.JPG";
import "../Components css/Home.css";
function Home() {
  return (
    <>
      <div className="container">
        <div className="header-section">
          <div className="header-img">
            <img className="my-img" src={myimage} alt="not found" />
          </div>
          <div className="header-content">
            <h2>Front-End Developer</h2>
            <div className="emojy-img">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
                alt="not found"
              />
              <img
                src="https://www.shareicon.net/data/512x512/2015/09/04/95596_html_512x512.png"
                alt="not found"
              />
              <img
                src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-file-files-css-icon-vector-design-picture-image_8245625.png"
                alt="not found"
              />
              <img
                src="https://thumbs.dreamstime.com/b/javascript-abstract-concept-vector-illustration-game-engine-js-development-web-programming-language-website-project-mobile-283554698.jpg"
                alt=" not found"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
