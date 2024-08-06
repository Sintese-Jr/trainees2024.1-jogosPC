import React, { useEffect, useState } from 'react'
import "./styles.css"
import TituloSecao from './../TituloSecao/index.tsx';
import GenderCard from '../GenderCard/index.tsx';
import api from '../../hooks/generos.tsx';
import CardTop3 from '../CardTop3/index.tsx';
import { JogosType } from '../../types/jogos.tsx';

export default function TopGames() {
  const [generos, setGeneros] = useState([]);
  const [topGames, setTopGames] = useState<JogosType[]>([]);
  const [selectedGender, setSelectedGender] = useState('');

  function handleSelectGender(genero: string) {
    setSelectedGender(genero);
    api.fetchGamesGender(selectedGender).then((data) => {
      setTopGames(data);
    });
  }

  useEffect(() => {
    console.log(selectedGender);
  }, [selectedGender]);

  useEffect(() => {
    api.fetchAllGenders().then((data) => {
      setGeneros(data);
      setSelectedGender(data[0]);
    });
  }, []);

  return (
    <div className='container-top-games'>
      <div style={{ marginTop: "2rem" }}><TituloSecao titulo='TOP 3' /></div>
      <div className='list-genders'>
        {generos?.map((genero) => (
          <div className='genero'>
            <GenderCard text={genero} cardSelected={selectedGender} onClick={handleSelectGender} />
          </div>
        ))}
      </div>
      <div className='top3'>
        {
          topGames?.map((game, index) => (
            <CardTop3
              ranking={index + 1}
              imagem={game.background}
              nome={game.game}
              vendas={game.total_copies_sold}
              data={game.release_date}
              variant={index === 0 ? 'top-1' : index === 1 ? 'top-2' : 'top-3'}
            />
          ))

        }
      </div>
    </div>
  )
}
