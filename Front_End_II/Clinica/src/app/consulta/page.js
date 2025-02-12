'use client';  
import React, { useEffect, useState } from "react";  
import styles from './consulta.module.css';  

const urlBanco = "https://api-clinica-2a.onrender.com";  

export default function Consultas() {  
    const [consultas, setConsultas] = useState([]);  
    const [consultasFiltradas, setConsultasFiltradas] = useState([]);  
    const [mostrarLista, setMostrarLista] = useState(false);  
    const [pesquisa, setPesquisa] = useState("");  
    const [tipoBusca, setTipoBusca] = useState("");  

    const alternarPopup = async (tipo) => {  
        setTipoBusca(tipo);  
        setMostrarLista((prev) => !prev);  

        if (!mostrarLista) {  
            await listarConsultas(tipo);  
        }  
    };  

    async function listarConsultas(tipo) {  
        try {  
            const url =`${urlBanco}/consultas`;  
            const resposta = await fetch(url);  
            if (!resposta.ok) throw new Error("Erro ao buscar dados: " + resposta.statusText);  

            const dados = await resposta.json();  
            setConsultas(dados);  
            setConsultasFiltradas(dados);  
        } catch (erro) {  
            console.error('Erro ao buscar consultas:', erro);  
        }  
    }  

    function pesquisaMudanca(nome) {  
        setPesquisa(nome);  

        if (nome.trim() === "") {  
            setConsultasFiltradas(consultas);  
        } else {  
            const filtrados = consultas.filter((consulta) =>  
                (tipoBusca === 'paciente' ? consulta.paciente : consulta.medico)
                    .toLowerCase().includes(nome.toLowerCase())  
            );  
            setConsultasFiltradas(filtrados);  
        }  
    }  

    useEffect(() => {  
        listarConsultas(tipoBusca);  
    }, [tipoBusca]);  

    return (  
        <div className={styles.containerPagina}>  
            <div className={styles.conteudoPrincipal}>  
                <div className={styles.tituloPagina}>  
                    <h1 className={styles.tituloPaginaTexto}>Lista de Consultas</h1>  
                </div>  
                <div className={styles.containerBotao}>  
                    <button onClick={() => alternarPopup("paciente")} className={styles.botaoBuscar}>  
                        Buscar por Paciente  
                    </button>  
                    <button onClick={() => alternarPopup("medico")} className={styles.botaoBuscar}>  
                        Buscar por Médico  
                    </button>  
                </div>  

                {/* Pop-up de busca */}
                {mostrarLista && (  
                    <div className={styles.popupContainer} onClick={() => setMostrarLista(false)}>  
                        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>  
                            <button className={styles.botaoFechar} onClick={() => setMostrarLista(false)}>Fechar</button>  

                            <input  
                                type="text"  
                                className={styles.inputPesquisa}  
                                value={pesquisa}  
                                onChange={(e) => pesquisaMudanca(e.target.value)}  
                                placeholder={`Digite o nome do ${tipoBusca === 'paciente' ? 'Paciente' : 'Médico'}`}  
                            />  

                            <div className={styles.listaConsultas}>  
                                {consultasFiltradas.length > 0 ? (  
                                    consultasFiltradas.map((consulta) => (  
                                        <div key={consulta.id} className={styles.itemConsulta}>  
                                            {tipoBusca === 'paciente' ? consulta.paciente : consulta.medico}  
                                        </div>  
                                    ))  
                                ) : (  
                                    <p className={styles.nenhumEncontrado}>  
                                        Nenhum {tipoBusca === 'paciente' ? 'Paciente' : 'Médico'} encontrado.  
                                    </p>  
                                )}  
                            </div>  
                        </div>  
                    </div>  
                )}

                {/* Tabela de Consultas */}
                <table className={styles.tabelaConsultas}>  
                    <thead className={styles.cabecalhoTabela}>  
                        <tr className={styles.cabecalhoCelula}>  
                            <th className={styles.cabecalhoCelulaItem}>Id</th>  
                            <th className={styles.cabecalhoCelulaItem}>Paciente</th>  
                            <th className={styles.cabecalhoCelulaItem}>Médico</th>  
                            <th className={styles.cabecalhoCelulaItem}>Data</th>  
                            <th className={styles.cabecalhoCelulaItem}>Hora</th>  
                            <th className={styles.cabecalhoCelulaItem}>Status</th>  
                        </tr>  
                    </thead>  
                    <tbody className={styles.corpoTabela}>  
                        {consultasFiltradas.map((consulta) => (  
                            <tr key={consulta.id}>  
                                <td className={styles.linhaTabela}>{consulta.id}</td>  
                                <td className={styles.linhaTabela}>{consulta.paciente}</td>  
                                <td className={styles.linhaTabela}>{consulta.medico}</td>  
                                <td className={styles.linhaTabela}>{consulta.data}</td>  
                                <td className={styles.linhaTabela}>{consulta.hora}</td>  
                                <td className={styles.linhaTabela}>{consulta.tipo}</td>  
                            </tr>  
                        ))}  
                    </tbody>  
                </table>  
            </div>  
        </div>  
    );  
}  
