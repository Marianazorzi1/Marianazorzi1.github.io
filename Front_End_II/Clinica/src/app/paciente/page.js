'use client';
import React, { useEffect, useState } from "react";
import styles from '../paciente/paciente.module.css';

const urlBanco = "https://api-clinica-2a.onrender.com";

export default function Pacientes() {
    const [pacientes, setPacientes] = useState([]);
    const [pacientesFiltrados, setPacientesFiltrados] = useState([]);
    const [mostrarLista, setMostrarLista] = useState(false);
    const [pesquisa, setPesquisa] = useState("");

    const alternarPopup = async () => {
        setMostrarLista((prev) => !prev);

        if (!mostrarLista) {
            await listarPacientes();
        }
    };

    async function listarPacientes() {
        try {
            const resposta = await fetch(`${urlBanco}/pacientes`);
            if (!resposta.ok) throw new Error("Erro ao buscar dados: " + resposta.statusText);

            const dados = await resposta.json();
            setPacientes(dados);
            setPacientesFiltrados(dados);
        } catch (erro) {
            console.error('Erro ao buscar pacientes:', erro);
        }
    }

    function pesquisaMudancaPacientes(nome) {
        setPesquisa(nome);

        if (nome.trim() === "") {
            setPacientesFiltrados(pacientes);
        } else {
            const filtrados = pacientes.filter((paciente) =>
                paciente.nome.toLowerCase().includes(nome.toLowerCase())
            );
            setPacientesFiltrados(filtrados);
        }
    }

    useEffect(() => {
        listarPacientes();
    }, []);

    return (
        <div className={styles.containerPagina}>
            <div className={styles.conteudoPrincipal}>
                <div className={styles.tituloPagina}>
                    <h1 className={styles.tituloPaginaTexto}>Lista de Pacientes</h1>
                </div>
                <div className={styles.containerBotao}>
                    <button onClick={alternarPopup} className={styles.botaoBuscar}>
                        Buscar Paciente
                    </button>
                </div>

                {mostrarLista && (
                    <div className={styles.popupContainer} onClick={alternarPopup}>
                        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.botaoFechar} onClick={alternarPopup}>Fechar</button>

                            <input
                                type="text"
                                className={styles.inputPesquisa}
                                value={pesquisa}
                                onChange={(e) => pesquisaMudancaPacientes(e.target.value)}
                                placeholder="Digite o nome do paciente"
                                onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')}
                            />

                            <div className={styles.listaPacientes}>
                                {pacientesFiltrados.length > 0 ? (
                                    pacientesFiltrados.map((paciente) => (
                                        <div key={paciente.id} className={styles.itemPaciente}>
                                            {paciente.nome}
                                        </div>
                                    ))
                                ) : (
                                    <p className={styles.nenhumEncontrado}>Nenhum paciente encontrado.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <table className={styles.tabelaPacientes}>
                    <thead className={styles.cabecalhoTabela}>
                        <tr className={styles.cabecalhoCelula}>
                            <th className={styles.cabecalhoCelulaItem}>Id</th>
                            <th className={styles.cabecalhoCelulaItem}>Nome</th>
                            <th className={styles.cabecalhoCelulaItem}>Idade</th>
                            <th className={styles.cabecalhoCelulaItem}>Telefone</th>
                            <th className={styles.cabecalhoCelulaItem}>E-mail</th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpoTabela}>
                        {pacientes.map((paciente) => (
                            <tr key={paciente.id}>
                                <td className={styles.linhaTabela}>{paciente.id}</td>
                                <td className={styles.linhaTabela}>{paciente.nome}</td>
                                <td className={styles.linhaTabela}>{paciente.idade}</td>
                                <td className={styles.linhaTabela}>{paciente.telefone}</td>
                                <td className={styles.linhaTabela}>{paciente.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
