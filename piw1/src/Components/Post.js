import React from 'react';
import './stylePost.css';

class Post extends React.Component{
    render(){
        return (
            <div className='post'> 
                <div className='nickname'> Peta </div>
                <div className='msg'>Algumas pessoas tem talento, outras beleza e eu não tenho nada</div>
                <div className='nickname'> Peta </div>
                <div className='msg'>Eu nunca vou perdoar um Ministério da Educação que não pegou o MC Livinho e fez o sósia MC Livrinho: o MC da Educação</div>
                <div className='nickname'> Pita </div>
                <div className='msg'>sinceramente não ligo pra beijo na boca eu queria mesmo é namorar pra ter alguém pra ver cocoricó cmg</div>
                <div className='nickname'> Pota </div>
                <div className='msg'>Bandido bom é bandido que disponibiliza o jogo completo com tutorial de instalação, crack e tradução.</div>
                <div className='nickname'> Patrica </div>
                <div className='msg'>Aquela perda de dignidade rápida quando você espirra e solta um pum junto</div>

            </div>
        );
    }
}
export default Post;