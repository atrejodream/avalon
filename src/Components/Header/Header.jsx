import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./../../assets/logo.png";

const icons = {
  globe: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zm0 0v19.5m0-19.5C8.571 5.165 6.75 8.91 6.75 12.75c0 3.84 1.821 7.585 5.25 10.5m0-19.5C15.429 5.165 17.25 8.91 17.25 12.75c0 3.84-1.821 7.585-5.25 10.5"
      />
    </svg>
  ),
  ship: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.375 19.5h17.25M3.375 19.5c.54-4.257 4.752-7.5 8.625-7.5 3.873 0 8.085 3.243 8.625 7.5M3.375 19.5c-.927 0-1.687-.76-1.687-1.687v-.126c0-2.964 2.133-5.36 5.016-5.847m14.328 7.66V4.311a.75.75 0 00-.596-.737L11.602 2.38a.75.75 0 00-.422 0L4.596 3.574a.75.75 0 00-.596.737v15.403"
      />
    </svg>
  ),
  anchor: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 6.75h4.5m-2.25 0v8.25m0 0H8.25a3.375 3.375 0 010-6.75h7.5a3.375 3.375 0 010 6.75h-3.75z"
      />
    </svg>
  ),
  building: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3.75H17.25a2.25 2.25 0 012.25 2.25V21h-3v-2.25h-9V21h-3V6a2.25 2.25 0 012.25-2.25z"
      />
    </svg>
  ),
};

const Header = (props) => {
  const links = [
    { link: "/", name: "Home", icon: "globe" },
    { link: "/about", name: "About", icon: "globe" }, // Додано посилання на AboutPage
  ];

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header-logo" />
      <nav className="header-nav">
        {links.map((el, index) => (
          <div key={index} className="nav-item">
            <NavLink
              to={el.link}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {el.icon && icons[el.icon]} {/* Додаємо SVG іконку */}
              <span>{el.name}</span>
            </NavLink>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
