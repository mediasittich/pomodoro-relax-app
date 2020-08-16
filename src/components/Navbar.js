import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";
import { FiWind } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";
import { GiMeditation } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";

const tabs = [
  {
    id: 1,
    exact: true,
    route: "/",
    label: "Home",
    icon: <RiHome2Line />,
  },
  {
    id: 2,
    exact: false,
    route: "/pomodoro",
    label: "Pomodoro",
    icon: <IoIosTimer />,
  },
  {
    id: 3,
    exact: false,
    route: "/relax",
    label: "Breathe",
    icon: <FiWind />,
  },
  {
    id: 4,
    exact: false,
    route: "/meditate",
    label: "Meditate",
    icon: <GiMeditation />,
  },
];

const Navigation = () => {
  return (
    <header>
      {/* Top Navigation on large screens */}
      <Navbar expand="lg" fixed="top" className="d-none d-lg-block">
        <Container>
          <Navbar.Brand>stuff</Navbar.Brand>
          <Nav className="ml-auto">
            {tabs.map((tab) => (
              <NavItem key={tab.id}>
                <NavLink
                  exact={tab.exact}
                  activeClassName="active"
                  to={tab.route}
                >
                  {tab.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Container>
      </Navbar>
      {/* Bottom Navigation on small screens */}
      <Navbar expand fixed="bottom" className="d-block d-lg-none">
        <Nav className="w-100 justify-content-around">
          {tabs.map((tab) => (
            <NavItem key={tab.id}>
              <NavLink
                exact={tab.exact}
                activeClassName="active"
                to={tab.route}
              >
                <div className="row flex-column justify-content-center align-items-center">
                  {tab.icon}
                  <div>{tab.label}</div>
                </div>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    </header>
  );
};

export default Navigation;
