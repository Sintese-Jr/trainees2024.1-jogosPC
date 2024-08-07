import React from "react";
import './styles.css'
import SimonIMG from "../../assets/images/simon-img.png"
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Footer() {
    return (

        <div className="div-principal" id="sobre_nos">

            <div className="simon-div">
                <img src={SimonIMG} />
            </div>

            <div className="nossa-missao">
                <h6 className="tittle-mission" >Sobre Nós</h6>
                <div className="hrzinho"></div>
                <h6 className="text" >Simon Games é um site, criado em 2024, com o objetivo de oferecer uma plataforma onde jogadores possam acessar facilmente informações sobre os jogos mais populares para computador !</h6>
            </div  >


            <div className="acesso-rapido">

                <h6 className="tittle-acess"> Acesso Rápido</h6>
                <div className="hrzinho"></div>
                <h6 className="text" >
                    <a href="#home"> Home </a>
                </h6>
                <h6 className="text" >
                    <a href="#top3"> Top 3 </a>
                </h6>
                <h6 className="text" >
                    <a href="#catalogo"> Ranking Geral/Catálogo </a>
                </h6>

            </div>

            <div className="arrow-center">
                <a href="#home">
                    <MdKeyboardArrowUp className="arrowup" />
                </a>
            </div>




        </div>

    )
}