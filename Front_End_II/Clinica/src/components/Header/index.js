"use client";

import Link from "next/link";
import React, { useState } from "react";
import "./styles.css";
import Image from "next/image"; 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <header className="header">
      <Image src="/images/hfrwbj (3).png" alt="Logo" className="logo"  width="300" height="150"/>
    

      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/medico">Médicos</Link></li>
          <li><Link href="/paciente">Pacientes</Link></li>
          <li><Link href="/consulta">Agendamento</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
