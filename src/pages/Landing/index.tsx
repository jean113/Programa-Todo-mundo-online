import React from 'react';
import './styles.css';
import Menu from '../../components/Menu';
import ResumoCurso from '../../components/ResumoCurso';
import HTMLLogo from '../../assets/images/html5.png';
import CSSLogo from '../../assets/images/css.png';
import JSLogo from '../../assets/images/javascript.png';
import NodeLogo from '../../assets/images/node.jpg';
import ReactLogo from '../../assets/images/react.jpg';
import ReactNativeLogo from '../../assets/images/react-native.png';
import Animacao from '../../components/Animacao';
import Student from '../../assets/animations/estudante.json';
import Voluntario from '../../assets/animations/voluntarios.json';


function Landing()
{
    return(
        <>
            <Menu/>

            <main>

                <section className="cursos">

                    <div className="fundo">
                        <div className="texto">

                            <h1>Programa Todo mundo online</h1>
                            <h3>Acreditamos que a educação e tecnologia é um direito de todos</h3>

                            <div>
                                Através da parceria de empresas, voluntariado e doações de equipamentos usados para 
                                envio de internet e transmissão de aulas, nosso objetivo é fazer com que todos aqueles 
                                que não tem condições, possam ter acesso a cursos gratuitos que os coloquem no mercado 
                                da tecnologia.
                            </div>

                            

                        </div>


                        <div className="area_resumo_cursos">
                            <ResumoCurso src={HTMLLogo} titulo="HTML" alt="Logomarca do HTML">
                                Você aprenderá o funcionamento das tags e como criar suas páginas
                                HTML
                            </ResumoCurso>
                            
                            <ResumoCurso src={CSSLogo} titulo="CSS" alt="Logomarca do CSS">
                                Aqui é sobre a estilização das páginas, seja atráves de classes ou id's
                                e como deixar seu site visualmente mais bonito
                            </ResumoCurso>
                            
                            <ResumoCurso src={JSLogo} titulo="Javascript" alt="Logomarca do Javascript">
                                Através do Javascript, podemos tornar os sites mais interativos e interessantes
                                para os usuários
                            </ResumoCurso>
                            
                            <ResumoCurso src={NodeLogo} titulo="Node" alt="Logomarca do Node">
                                Com este framework, podemos criar nosso backend com a linguagem Javascript
                                e a partir daí, podemos criar sistemas web completos
                            </ResumoCurso>
                            
                            <ResumoCurso src={ReactLogo} titulo="React" alt="Logomarca do React">
                                Fazendo este curso e entendendo o tão poderoso que é o React, seus sites
                                ou sistemas webs ficaram mais interativos e mais fáceis de serem criados 
                            </ResumoCurso>
                            
                            <ResumoCurso src={ReactNativeLogo} titulo="React Native" alt="Logomarca do React Native">
                                Por último, mas não menos importante, com o React Native, podemos pegar todos os sites que
                                fizemos para a web e criar a versão mobile ou podemos criar apps inéditos.
                            </ResumoCurso>
                   
                        </div>

                    </div>

                </section>


                <section className='secao_area_estudar'>

                    <div className="animacao_estudante">

                        <Animacao img={Student} />

                    </div>

                    
                    <div className="texto_area_estudar">

                        <h1>Quero Estudar</h1>
                        <div>
                            Ficou interessado? Acesse o link Fale Conosco e após preencher o formulário, a sua situação será avaliada e caso
                            você seja selecionado, receberá uma bolsa de estudos gratuita permitindo o acesso
                            a internet e aos nossos cursos através do empréstimo de equipamentos como roteador,
                            notebook e banda larga.

                            O aluno se comprometerá a usar a internet apenas para fins de estudos, ter um bom aproveitamento dos cursos
                            e devolver os equipamentos em boas condições para o aproveitamento de outros.

                            O aluno terá um ano para concluir todos os módulos e no fim de cada um receberá um certificado, garantindo
                            sua entrada para o mercado de trabalho.


                        </div>

                    </div>

                    
                </section>  

                <section className="secao_area_voluntario">
                    
                    <div className="texto_area_voluntario">
                        <h1>Quero Ajudar</h1>
                        
                        <div>
                            Você manja de tecnologia e quer dar aulas? 
                            Você tem algum computador, notebook, roteador em boas condições parado em casa?
                            Você quer ajudar através de doações?

                            Entre em contato através do link Fale Conosco, sua ajuda é sempre bem-vinda na construção de um mundo onde a educação e a tecnologia
                            é um direito de todos.


                        </div>
                    </div>

                    <div className="animacao">

                        <Animacao img={Voluntario} />
                    </div>

                </section>  
                
            </main>

            <footer className="rodape">
                Todos os direitos reservados.
            </footer>
        
      
          
        </>
    );
}

export default Landing;