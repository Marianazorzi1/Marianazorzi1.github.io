"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./styles.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para fechar o menu ao clicar fora
  const closeMenuOnClickOutside = (e) => {
    const menu = document.querySelector('.nav');
    const menuButton = document.querySelector('.menu-toggle');
    if (menu && !menu.contains(e.target) && !menuButton.contains(e.target)) {
      setIsOpen(false); // Fecha o menu
    }
  };

  useEffect(() => {
    // Adiciona o event listener para detectar cliques fora do menu
    document.addEventListener("mousedown", closeMenuOnClickOutside);
    
    // Remove o event listener quando o componente for desmontado
    return () => {
      document.removeEventListener("mousedown", closeMenuOnClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">Cabeçalho</div>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Abrir menu"
      >
        ☰
      </button>
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
