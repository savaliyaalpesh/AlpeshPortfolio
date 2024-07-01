import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Development Skill</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Fitness Legends <br /> Website
            </h3>
          </div>
          <a
            href="https://gym-react-evje5kazo-savaliya-alpeshs-projects.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button-85">Live</button>
          </a>
          <br />
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Fitness Legends Website</h3>
              <p className="services__modal-description">
                The Fitness Legends Website is a React-based application designed for fitness enthusiasts. It offers a dynamic, responsive, and visually appealing interface to access information about fitness programs, trainers, and membership plans.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    used Responsive Navigation
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Dynamic Routing
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    React: Building the user interface components.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    React Router: Managing navigation and routing.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    CSS Modules: Styling the components.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              E-commerce-<br/>dummyjson
            </h3>
          </div>
          <a
            href="https://e-commerce-with-dummyjson-9mwi1xw5i-savaliya-alpeshs-projects.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button-85">Live</button>
          </a>
          <br />
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">E-commerce-dummyjson</h3>
              <p className="services__modal-description">
              Developed a fully functional e-commerce web application using React, Redux, React Router, and Bootstrap and DummyjsonApi. The application features a dynamic product listing, detailed product view, and shopping cart functionality.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                  Frontend: React, React Router, Bootstrap, Axios
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                  State Management: Redux
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                  Tools: Visual Studio Code, Git, GitHub
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">This project demonstrates proficiency in building interactive web applications, effective state management with Redux, and integrating third-party APIs.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Results <br /> Management System
            </h3>
          </div>
          <a
            href="https://github.com/jeetsavsani1173/Results_Management_System"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button-85">Live</button>
          </a>
          <br />
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Results Management System
              </h3>
              <p className="services__modal-description">
                Results Management System is devloped using .net framwork
                Technology. it has basic application which has two type of user
                called Admin and Student. Admin can add student and student
                results. while student can see his/her results.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    for styling used BootStrap.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    Coding IDE used is Visual studio 2019
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    for storing data of studnet and result used SQL database.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    added print result functionality
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">
                    used inbuilt functionality called gridView for showing data
                    of studnets and results.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
