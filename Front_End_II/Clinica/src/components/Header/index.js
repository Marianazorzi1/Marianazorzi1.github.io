"use client";

import Link from "next/link";
import React, { useState } from "react";
import "./styles.css";
import Image from "next/image"; 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <header className="header">
      <Image src="/images/png-transparent-injury-health-care-computer-icons-accident-accident-logo-accident-medical-thumbnail.png" alt="Logo" className="logo"  width="50" height="50"/>
    

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
