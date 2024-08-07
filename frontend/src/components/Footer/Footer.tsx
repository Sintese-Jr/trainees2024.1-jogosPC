import React from "react";
import './styles.css'
import SimonIMG from "../../assets/images/simon-img.png"
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Footer() {
    return (

        <div className="div-principal">

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
                <h6 className="text" >Home</h6>
                <h6 className="text" >Top 3 </h6>
                <h6 className="text" >Ranking Geral/Catálogo</h6>

            </div>

            <div className="arrow-center">
                <a href="#home">
                    <MdKeyboardArrowUp className="arrowup" />
                </a>
            </div>




        </div>

    )
}