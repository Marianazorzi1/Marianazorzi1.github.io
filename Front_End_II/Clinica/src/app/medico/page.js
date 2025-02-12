'use client';
import React, { useEffect, useState } from "react";
import estilos from './medico.module.css';

const urlBanco = "https://api-clinica-2a.onrender.com";

export default function Medicos() {
    const [medicos, setMedicos] = useState([]); 
    const [medicosFiltrados, setMedicosFiltrados] = useState([]); 
    const [mostrarLista, setMostrarLista] = useState(false); 
    const [pesquisa, setPesquisa] = useState(""); 


    const alternarPopup = async () => {
        setMostrarLista((prev) => !prev);

        if (!mostrarLista) {
            await listarMedicos();
        }
    };

    async function listarMedicos() {
        try {
            const resposta = await fetch(`${urlBanco}/medicos`);
            if (!resposta.ok) throw new Error("Erro ao buscar dados: " + resposta.statusText);

            const dados = await resposta.json();
            setMedicos(dados);
            setMedicosFiltrados(dados);
        } catch (erro) {
            console.error('Erro ao buscar médicos:', erro);
        }
    }

    function pesquisaMudancaMedicos(nome) {
        setPesquisa(nome);

        if (nome.trim() === "") {
            setMedicosFiltrados(medicos); 
        } else {
            const filtrados = medicos.filter((medico) =>
                medico.nome.toLowerCase().includes(nome.toLowerCase())
            );
            setMedicosFiltrados(filtrados);
        }
    }

    useEffect(() => {
        listarMedicos();
    }, []);

    return (
        <div className={estilos.containerPagina}>
            <div className={estilos.conteudoPrincipal}>
                <div className={estilos.tituloPagina}>
                    <h1 className={estilos.tituloPaginaTexto}>Lista de Médicos</h1>
                </div>
                <div className={estilos.containerBotao}>
                    <button onClick={alternarPopup} className={estilos.botaoBuscar}>
                        Buscar Médico
                    </button>
                </div>

                {mostrarLista && (
                    <div className={estilos.popupContainer} onClick={alternarPopup}>
                        <div className={estilos.popup} onClick={(e) => e.stopPropagation()}>
                            <button className={estilos.botaoFechar} onClick={alternarPopup}>Fechar</button>

                            <input
                                type="text"
                                className={estilos.inputPesquisa}
                                value={pesquisa}
                                onChange={(e) => pesquisaMudancaMedicos(e.target.value)}
                                placeholder="Digite o nome do médico"
                                onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')}
                            />

                            <div className={estilos.listaMedicos}>
                                {medicosFiltrados.length > 0 ? (
                                    medicosFiltrados.map((medico) => (
                                        <div key={medico.id} className={estilos.itemMedico}>
                                            {medico.nome}
                                        </div>
                                    ))
                                ) : (
                                    <p className={estilos.nenhumEncontrado}>Nenhum médico encontrado.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <table className={estilos.tabelaMedicos}>
                    <thead className={estilos.cabecalhoTabela}>
                        <tr className={estilos.cabecalhoCelula}>
                            <th className={estilos.cabecalhoCelulaItem}>Id</th>
                            <th className={estilos.cabecalhoCelulaItem}>Nome</th>
                            <th className={estilos.cabecalhoCelulaItem}>Telefone</th>
                            <th className={estilos.cabecalhoCelulaItem}>E-mail</th>
                            <th className={estilos.cabecalhoCelulaItem}>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody className={estilos.corpoTabela}>
                        {medicos.map((medico) => (
                            <tr key={medico.id}>
                                <td className={estilos.linhaTabela}>{medico.id}</td>
                                <td className={estilos.linhaTabela}>{medico.nome}</td>
                                <td className={estilos.linhaTabela}>{medico.telefone}</td>
                                <td className={estilos.linhaTabela}>{medico.email}</td>
                                <td className={estilos.linhaTabela}>{medico.especialidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
