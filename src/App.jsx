import React from "react";

import { BrowserRouter } from "react-router-dom";
import Routing from "./routing/Routing";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
