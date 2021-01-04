import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import Cards from "./components/cards/Cards";
import "./App.css";

const App = () => {

  const sidebarIsOpen = useState(true);
  
  return (
    <>
    <Router>
      <div className="App wrapper">
        <SideBar isOpen={sidebarIsOpen} />
        <Content sidebarIsOpen={sidebarIsOpen} />
        <Cards />
      </div>
    </Router>
  </>
  );
};

export default App;
