'use client'
import { useState } from "react";
export default function Filter(){
    const nomes = ['Wagner', 'Beatriz', 'Ana', 'Mariana', 'João'];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pares = nums.filter(num =>(num %2 == 0))
    const [busca, setBusca] = useState ('')
    const nomesBusca = nomes.filter(nome => (nome.startsWith(busca)))
    console.log(nums)
    console.log(pares)
    return(

        <div>
            <h1>Filter/ Filtro</h1>
            <input
            value={busca} type="text" onChange={e => (setBusca(e.target.value))} />
            <ul>
                {nomesBusca.map((nome, i) => (
                    <li key={i}>{nome}</li>
                    ) )}
            </ul>
        </div>
    )

}