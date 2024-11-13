'use client'
import { useState } from "react";
export default function State(){
    const [conteudo, setConteudo] = useState('Bom dia!')
    const [name, setName] = useState('')
    const [showDiv, setShowDiv] = useState(true)
    const CParagrafo = () =>{
        setConteudo ('Boa Tarde!');
        console.log('conteudo: ' + conteudo)
    }   
    const CInput = (event) =>{
        console.log(event.target.value)
        setName (event.target.value);

    }
    return(
        <div>
            
            {/* <p>{conteudo}</p>
            <button onClick={CParagrafo}>mudar</button> */}
          <button onClick={() => {setShowDiv(!showDiv)}}>{showDiv?'Esconder':'Mostrar'}</button>
            { showDiv && (
                <div>
                <p>Nome: {name}</p>
                <input type="text" onChange={CInput}/>
            </div>
            )}
            
        </div>
    )
} 