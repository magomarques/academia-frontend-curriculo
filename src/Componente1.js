import React from "react";
import fotoPessoal from './foto.JPG';
import * as S from './Stylecomponente1';

export default function Componente1() {
    return (
        <S.Lateral>
            <S.Foto src={fotoPessoal}/>
            <S.Texto>
            <h3>RESUMO PROFISSIONAL</h3>
            <p>Após anos dedicados à engenharia civil, resolvi redirecionar minha 
                carreira e seguir o caminho da programação, buscando nesta nova
                área de atuação, aplicar e aperfeiçoar os novos conhecimentos
                adquiridos e contribuir no desenvolvimento de novos projetos 
                da empresa.
            </p>
            <h3>COMPETÊNCIAS</h3>
            <p>Conhecimentos em Java, Python, JavaScript, HTML e CSS, Banco de
                Dados SQLServer, MySQL e SQLite, conhecimentos em Lógica de
                Programação, Probabilidade e Estatística, Programação Orientada a
                Objetos, UML Linguagem de Modelagem Unificada, Metodologia Lean Inception
                e Metodologias Ágeis. Conhecimentos dos Frameworks SpringBoot, Angular, 
                Django, das IDE's e editores Eclipse, PyCharm e Visual Studio Code 
                e Sistemas Operacionais Windows e Linux.
            </p>
            <h3>SOFT SKILLS</h3>
            <p>Autodidata, comunicativo, comprometido, líder, espírito de equipe,
                criativo, empático, organizado, resiliente, proativo, perseverante,
                gestor de tempo, colaborativo, autoconfiante e flexível.
            </p>
            <h3>CONQUISTAS</h3>
            <p>Hackathon Ustore Porto Digital</p>
            <p>Bootcamp Accenture</p>
            </S.Texto>
        </S.Lateral>
    )
}