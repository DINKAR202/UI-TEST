import React, { useState } from "react";
import {
  renderEducation,
  renderJob,
  renderProgress,
  renderProgressWithoutPercentage,
  socialIcons,
} from "./shared/shared";

const Resume = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);

  return (
    <div className={darkTheme ? "bg-dark text-white" : "bg-light text-dark"}>
      {/* Theme toggle button start */}
      <div className="position-fixed top-50 end-0 translate-middle-y z-3 d-flex">
        <button
          className="btn bg-custom-color my-3 round-custom-theme"
          onClick={toggleTheme}
        >
          {darkTheme ? (
            <i class="bi bi-sun-fill text-white"></i>
          ) : (
            <i class="bi bi-moon-fill text-white"></i>
          )}
        </button>
      </div>
      {/* Theme toggle button end */}

      <div className="container-lg min-vh-100">
        <div className="row p-1">
          {/* Left Column - Profile Info */}
          <div className="col-lg-4 col-md-5 col-sm-12 mb-4">
            <div className="card shadow-sm">
              <div className="position-relative">
                <img
                  src="https://www.w3schools.com/w3images/avatar_hat.jpg"
                  className="card-img-top"
                  alt="Jane Doe"
                />
                <h5 className="position-absolute bottom-0 start-0 m-3 text-black">
                  Jane Doe
                </h5>
              </div>

              <div className="card-body">
                <p>
                  <i className="bi bi-briefcase-fill me-2 text-custom-blue"></i>
                  Designer
                </p>
                <p>
                  <i className="bi bi-house-door-fill me-2 text-custom-blue"></i>
                  London, UK
                </p>
                <p>
                  <i className="bi bi-envelope-fill me-2 text-custom-blue"></i>
                  ex@mail.com
                </p>
                <p>
                  <i className="bi bi-telephone-fill me-2 text-custom-blue"></i>
                  1224435534
                </p>
                <hr />

                <h6 className="mb-2 fw-bold">
                  <i class="bi bi-asterisk text-custom-blue me-3"></i>Skills
                </h6>
                {renderProgress("Adobe Photoshop", 90)}
                {renderProgress("Photography", 80)}
                {renderProgress("Illustrator", 75)}
                {renderProgress("Media", 50)}

                <hr />

                <h6 className="mb-2 fw-bold">
                  <i class="bi bi-globe-europe-africa text-custom-blue me-3"></i>
                  Languages
                </h6>
                {renderProgressWithoutPercentage("English", 100)}
                {renderProgressWithoutPercentage("Spanish", 60)}
                {renderProgressWithoutPercentage("German", 30)}
              </div>
            </div>
          </div>

          {/* Right Column - Work and Education */}
          <div className="col-lg-8 col-md-7 col-sm-12">
            {/* Work Experience Section */}
            <div className="card shadow-sm mb-4 p-4">
              <h4 className="mb-3">
                <i class="bi bi-suitcase-lg-fill text-custom-blue me-3"></i>{" "}
                Work Experience
              </h4>
              {renderJob(
                "Front End Developer / w3schools.com",
                "Jan 2015 - Current",
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic."
              )}
              {renderJob(
                "Web Developer / something.com",
                "Mar 2012 - Dec 2014",
                "Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic."
              )}
              {renderJob(
                "Graphic Designer / designsomething.com",
                "Jun 2010 - Mar 2012",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              )}
            </div>

            {/* Education Section */}
            <div className="card shadow-sm p-4">
              <h4 className="mb-3">
                <i class="bi bi-mortarboard-fill text-custom-blue me-3"></i>{" "}
                Education
              </h4>
              {renderEducation(
                "W3Schools.com",
                "Forever",
                "Web Development! All I need to know in one place"
              )}
              {renderEducation(
                "London Business School",
                "2013 - 2015",
                "Master Degree"
              )}
              {renderEducation(
                "School of Coding",
                "2010 - 2013",
                "Bachelor Degree"
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
      <footer
        className={
          darkTheme
            ? "bg-dark text-white text-center py-3 mt-4 border-top-2 border-top"
            : "bg-custom-color text-white text-center py-3 mt-4"
        }
      >
        <p>Find me on social media.</p>
        <ul className="d-flex gap-2 justify-content-center list-unstyled">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <i className={`bi bi-${icon}`}></i>
            </li>
          ))}
        </ul>
        <p className="mb-0">Powered by w3.css</p>
      </footer>
    </div>
  );
};

export default Resume;
