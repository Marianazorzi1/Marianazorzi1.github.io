"use client";

import React, { useState } from "react";
import "./styles.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">Minha Logo</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
