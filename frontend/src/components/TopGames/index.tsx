import React from 'react'
import "./styles.css"
import TituloSecao from './../TituloSecao/index.tsx';
import GenderCard from '../GenderCard/index.tsx';

const Generos = [
  "Todos", "Ação", "Fantasia", "Terror", "FPS", "Aventura", "Tetris", "Boa trama", "Realidade Virtual", "Jogos sérios", "Fantasia"
]

export default function TopGames() {
  return (
    <div className='container-top-games'>
      <div style={{ marginTop: "2rem" }}><TituloSecao titulo='TOP 3' /></div>
      <div className='list-genders'>
        {Generos.map(genero => (
          <div className='genero'><GenderCard text={genero} /></div>
        ))}
      </div>
      <div>C</div>
    </div>
  )
}
