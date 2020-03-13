import React from 'react';
import ReactDOM from 'react-dom';
import Estudante from './Components/Estudante';
import {CapitaoAmerica, ViuvaNegra} from './Components/Vingadores'

//const root = document.getElementById('root');
//ReactDOM.render (<Estudante nome='Isys' idade='27' curso = 'Design' natal = 'São Paulo'  />, root);

const root = document.getElementById('root')
ReactDOM.render (<div><CapitaoAmerica nome = 'carinha' /> <ViuvaNegra nome= 'garoto' /></div>, root)