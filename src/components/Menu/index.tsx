import React from 'react';
import './styles.css';

function Menu()
{
    return(
        <div className="layout">
            
            <div className="links"> 
                <a href="">HOME</a>
                <a href="">CURSOS</a>
                <a href="">FALE CONOSCO</a>     
            </div>

            <div>
                <a className="button" href="">ÁREA DO ALUNO</a>  
            </div>
            
        </div>


    );
}

export default Menu;