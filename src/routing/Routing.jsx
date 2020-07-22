import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import Particles from "react-particles-js";

const settings = [
  {
    particles: {
      number: {
        value: 200,
        density: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 6,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0
        },
        repulse: {
          distance: 400,
          duration: 4
        }
      }
    }
  }
];

const Routing = () => {
  return (
    <React.Fragment>
      <Particles params={settings[0]} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Redirect from="*" to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default Routing;
