import React from "react";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { Drawer, Button } from "@mantine/core";
import { Menu2 } from "tabler-icons-react";
import { useDisclosure } from "@mantine/hooks";
import logoAJ from "../../Assets/LogoAJ..png";
const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logoAJ} alt="logo" />
        </div>
        <div className="navbar-right">
          <ul className="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/digital-marketing">Digital Marketing</NavLink>
            </li>
            <li>
              <NavLink to="/Ad's-making">AD'S Making</NavLink>
            </li>
            <li>
              <NavLink to="/Bpo">BPO</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>
        <div className="header-menu">
          <>
            <Drawer
              position="right"
              offset={0.4}
              radius="md"
              opened={opened}
              onClose={close}
            >
              <ul className="menu">
                <li onClick={close}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={close}>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li onClick={close}>
                <NavLink to="/digital-marketing">Digital Marketing</NavLink>
                </li>
                <li onClick={close}>
                <NavLink to="/Ad's-making">AD'S Making</NavLink>
                </li>
                <li onClick={close}>
                <NavLink to="/Bpo">BPO</NavLink>
                </li>
                <li onClick={close}>
                <NavLink to="/contact">Contact us</NavLink>
                </li>
              </ul>
            </Drawer>
            {!opened ? (
              <Button className="burger-button" onClick={open}>
                <Menu2
                  className="open"
                  size={"2rem"}
                  strokeWidth={2}
                  color={"white"}
                />
              </Button>
            ) : (
              <Button className="x-button" onClick={close}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-x"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  color="white"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </Button>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
