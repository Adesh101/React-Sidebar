import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

const SideBar = () => (
  <div className="sidebar is-open">
    <div className="sidebar-header">
      <span color="info" style={{ color: "#ffff" }}>
        &times;
      </span>
      <h3>Lilly Classified</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <SubMenu title="Home" items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            About
          </NavLink>
        </NavItem>
        <SubMenu title="Pages" items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
