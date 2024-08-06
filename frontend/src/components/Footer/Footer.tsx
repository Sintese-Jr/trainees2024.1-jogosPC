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
                <h6 className="tittle-mission" >Nossa Missão</h6>
                <div className="hrzinho"></div>
                <h6 className="text" >Na Simon Games, nossa missão é apresentar os jogos mais vendidos do mundo. Nosso objetivo é ser a principal fonte de informações sobre os títulos mais populares, oferecendo uma visão clara e atualizada do mercado de games. Aqui, você encontrará uma lista dos jogos que conquistaram milhões de jogadores ao redor do mundo.</h6>
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