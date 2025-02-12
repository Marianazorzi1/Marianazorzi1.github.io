'use client';

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import "./styles.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Image
        className="logo"
        src="/images/hfrwbj (3).png"
        alt="Logo"
        width={140}
        height={85}
      />
      
      <nav className="nav">
        <ul className={`navOpcoes ${isOpen ? "show" : ""}`}>
          <li>
            <Link href="/" className="linkOpcoes">Home</Link>
          </li>
          
          <li className="opcoes">
            <Link href="#" className="linkOpcoes">Médicos</Link>
            <ul className="subMenu">
              <li><Link href="/medico" className="subMenuLink">Listar</Link></li>
              <li><Link href="#" className="subMenuLink">Adicionar</Link></li>
              <li><Link href="#" className="subMenuLink">Editar</Link></li>
              <li><Link href="#" className="subMenuLink">Excluir</Link></li>
            </ul>
          </li>

          <li className="opcoes">
            <Link href="#" className="linkOpcoes">Pacientes</Link>
            <ul className="subMenu">
              <li><Link href="/paciente" className="subMenuLink">Listar</Link></li>
              <li><Link href="#" className="subMenuLink">Adicionar</Link></li>
              <li><Link href="#" className="subMenuLink">Editar</Link></li>
              <li><Link href="#" className="subMenuLink">Excluir</Link></li>
            </ul>
          </li>

          <li className="opcoes">
            <Link href="#" className="linkOpcoes">Agendamentos</Link>
            <ul className="subMenu">
              <li><Link href="/consulta" className="subMenuLink">Listar Consultas</Link></li>
              <li><Link href="/agendar" className="subMenuLink">Agendar Consulta</Link></li>
              <li><Link href="#" className="subMenuLink">Editar Agendamento</Link></li>
              <li><Link href="#" className="subMenuLink">Cancelar Agendamento</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      
      <button className="menuBt" onClick={() => setIsOpen(!isOpen)}>
        <span className="spanBt"></span>
      </button>
    </header>
  );
};

export default Header;
