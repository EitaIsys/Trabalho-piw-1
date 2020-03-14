import React from 'react';
import logo from '../assets/logo.png';
import perfil from '../assets/perfil.png';
import './NavSup.css';


class NavegadorSuperior extends React.Component{
    render(){
        return(
                <div className="navegadorSup">
                    <img src={logo} alt ='logo' className="logo"/> 
                    <img src={perfil} alt='perfil' className='perfil'/>

                    <button>Linha do Tempo</button>
                    <button>Perfil</button>
                    <div className="nome">Ash Ketchum </div>
                    
                </div>
            );
    }
}
export default NavegadorSuperior;