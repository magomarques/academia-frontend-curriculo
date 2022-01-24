import React from "react";
import * as S from "./Stylecomponente2";
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

export default function Componente2() {
    return (
        <S.Lateral>
            <S.Texto>
                <S.Titulo>
                    <h1>Auriclecio Pereira</h1>
                </S.Titulo>
                <p><BsTelephone/>(81) 99910-0490</p>
                <p><AiOutlineMail/>auricleciomp@hotmail.com</p>
                <p><GoLocation/>Recife, PE</p>
                <p><AiOutlineLinkedin/><a href="https://linkedin.com/in/auriclecio-pereira" target="_blank">linkedin.com/in/auriclecio-pereira</a></p>
                <p><AiOutlineGithub/><a href="https://github.com/magomarques" target="_blank">github.com/magomarques</a></p>
                <S.Titulo>
                    <h3>HISTÓRIO PROFISSIONAL</h3>
                </S.Titulo>
                <p>08/2015 - 05/2018
                    <S.SubTitulo>
                    MILLS ESTRUTURAS E SERVIÇOS DE ENGENHARIA S/A | Recife, PE
                    </S.SubTitulo>
                    <p>Promotor Externo</p>
                    Visitas técnico-comerciais à clientes, acompanhamento de propostas e
                    elaboração de contratos para fornecimento de equipamentos para execução
                    de obras civis.
                </p>
                <p>04/2010 - 06/2013
                    <S.SubTitulo>
                    SH FORMAS ANDAIMES E ESCORAMENTOS LTDA | Recife, PE
                    </S.SubTitulo>
                    <p>Supervisor de Contratos</p>
                    Visitas técnico-comerciais à clientes, acompanhamento de propostas e
                    elaboração de contratos para fornecimento de equipamentos para execução
                    de obras civis.
                </p>
                <p>01/2003 - 03/2010
                    <S.SubTitulo>
                    ESTUB SISTEMAS CONSTRUTIVOS LTDA | Recife, PE
                    </S.SubTitulo>
                    <p>Coordenador Comercial</p>
                    Coorenador equipe comercial, apoiar na elaboração de propostas e na 
                    negociação de contratos para fornecimento de equipamentos para execução
                    de obra civis, aprovar e liberar relatórios comerciais para a 
                    gerência.
                </p>
                <S.Titulo>
                    <h3>FORMAÇÃO ACADÊMICA</h3>
                </S.Titulo>
                <p>Conclusão em 12/2021
                    <S.SubTitulo>
                    UNIT CENTRO UNIVERSITÁRIO TIRADENTES | Recife - PE
                    </S.SubTitulo>
                    Análise e Desenvolvimento de Sistemas
                </p>
                <p>Conclusão em 12/2002
                    <S.SubTitulo>
                    UFPE UNIVERSIDADE FEDERAL DE PERNAMBUCO | Recife - PE
                    </S.SubTitulo>
                    Engenharia Civil
                </p>
                <S.Titulo>
                    <h3>IDIOMAS</h3>
                </S.Titulo>
                <p>Inglês: Intermediário</p>
            </S.Texto>
        </S.Lateral>
    )
}