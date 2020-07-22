import React from "react";
import { Link } from "react-router-dom";

import cv from "../../assets/cv_22_07_2020.pdf";

import "./projects.scss";

const Projects = () => {
  return (
    <div id="main">
      <div className="container">
        <div className="container__start">
          <Link className="btn" to="/">
            Home
          </Link>
          <a
            className="btn"
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV Download
          </a>
        </div>
        <div className="cards-container">
          <div className="card">
            <div className="card__icons">
              <li className="icon">
                <a
                  href="https://github.com/jensrott/Social-Cycling"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="icon">
                <a
                  href="https://social-cycling.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </li>
            </div>
            <h1 className="card__title">Cycling Social Network</h1>
            <p className="card__text">
              The social network which brings cyclists together to ride in
              group.
            </p>
            <p className="card__technologies">
              MongoDB, Express, React, Node.js
            </p>
          </div>
          <div className="card">
            <div className="card__icons">
              <li className="icon">
                <a
                  href="https://github.com/jensrott/book-tracking-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="icon">
                <a
                  href="https://book-tracker-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </li>
            </div>
            <h1 className="card__title">Book tracker</h1>
            <p className="card__text">
              Keep track of the books you are currently reading. <br />
            </p>
            <p className="card__technologies">HTML, CSS, Javascript</p>
          </div>
          <div className="card">
            <div className="card__icons">
              <li className="icon">
                <a
                  href="https://github.com/jensrott/bachelorproef-demonstrator-site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="icon">
                <a
                  href="https://eloquent-clarke-888930.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </li>
            </div>
            <h1 className="card__title">Bachelor thesis</h1>
            <p className="card__text">
              For my bachelor thesis I created a domotica demonstrator tool for
              young families. I did this in collaboration with Niko.
            </p>
            <p className="card__technologies">
              React, Gatsby, Home Assistant, Express
            </p>
          </div>
          <div className="card">
            <div className="card__icons">
              <li className="icon">
                <a
                  href="https://github.com/jensrott/badminton-vlaanderen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="icon">
                <a
                  href="https://www.shuttlekids.be/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </li>
            </div>
            <h1 className="card__title">Shuttlekids.org</h1>
            <p className="card__text">
              Shuttlekids.org is a project in collaboration with Badminton
              Vlaanderen. Which was assigned by the Artevelde University
              College. I was one of the web developers who developed the site.
            </p>
            <p className="card__technologies">
              Wordpress, HTML, CSS, Javascript
            </p>
          </div>
          <div className="card">
            <div className="card__icons">
              <li className="icon">
                <a
                  href="https://github.com/jensrott/quotes-generator-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="icon">
                <a
                  href="https://quotes-fetcher-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </li>
            </div>
            <h1 className="card__title">Quotes Generator</h1>
            <p className="card__text">Search quotes from famous people.</p>
            <p className="card__technologies">Vue, Vuex, Material UI</p>
          </div>
          <div className="card">
            <div className="card__icons">
              <li className="icon">
                <a
                  href="https://github.com/jensrott/movie-tracking-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="icon">
                <a
                  href="https://github.com/jensrott/movie-tracking-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </li>
            </div>
            <h1 className="card__title">Movie tracker</h1>
            <p className="card__text">
              Website which you can use to keep track of your favorite movies.
            </p>
            <p className="card__technologies">React, Redux, Material UI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
