import React from 'react';
import './styles.css';

interface ResumoCursoProps
{
    titulo: string;
    src: string;
    alt: string;
}

const ResumoCurso: React.FC<ResumoCursoProps> = props =>
{
    return(
        <div className="contorno">
            <img className="img_resumo_cursos" src={props.src} alt={props.alt}/>
            <h1 className="titulo_resumo_cursos"> {props.titulo}</h1>
            <div className="texto_resumo_cursos"> {props.children} </div>
        </div>
    );
}

export default ResumoCurso;