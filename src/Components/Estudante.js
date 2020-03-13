import React from 'react';

function Estudante(props) {
    return (
        <ul>
            <li>nome: {props.nome}</li>
            <li>idade: {props.idade}</li>
            <li>curso:  {props.curso}</li>
            <li>cidade natal: {props.natal} </li>
        </ul>
    )

}

export default Estudante