'use client';
import { useEffect, useState } from "react";

export default function Efeitos() {
    const [ufs, setUfs] = useState([]);
    const [cid, setCid] = useState([]);
    const [ufSelected, setUfSelected] = useState('');
    const [cidSelected, setCidSelected] = useState('');

    const getUfs = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
            if (!response.ok) {
                throw new Error('Erro ao buscar dados: ' + response.statusText);
            }
            const data = await response.json();
            setUfs(data);
        } catch (error) {
            console.log('Ocorreu algum erro: ' + error);
        }
    };

    useEffect(() => {
        getUfs();
    }, []);

    const getCid = async () => {
        try {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelected}/municipios?orderBy=nome`);
            if (!response.ok) {
                throw new Error('Erro ao buscar dados: ' + response.statusText);
            }
            const data = await response.json();
            setCid(data);
        } catch (error) {
            console.log('Ocorreu algum erro: ' + error);
        }
    };

    useEffect(() => {
        if (ufSelected) getCid();
    }, [ufSelected]);

    return (
        <div>
            <h1>Efeitos Colaterais / Use Effect</h1>

            
            <select onChange={(e) => {setUfSelected(e.target.value), setCidSelected('')}}>
                <option value="">Selecione o estado</option>
                {ufs.map((uf) => (
                    <option value={uf.sigla} key={uf.id}>
                        {uf.nome} - {uf.sigla}
                    </option>
                ))}
            </select>

            
            <select onChange={(e) => setCidSelected(e.target.value)}>
                <option value="">Selecione a cidade</option>
                {cid.map((ci) => (
                    <option value={ci.nome} key={ci.id}>
                        {ci.nome}
                    </option>
                ))}
            </select>

          
            
                {cidSelected && <p> {cidSelected}</p>}
                

            
        </div>
    );
}