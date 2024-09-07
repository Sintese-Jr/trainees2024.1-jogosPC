import React, { useEffect, useState } from 'react'
import "./styles.css"
import TituloSecao from './../TituloSecao/index.tsx';
import GenderCard from '../GenderCard/index.tsx';
import api from '../../hooks/generos.tsx';
import CardTop3 from '../CardTop3/index.tsx';
import { JogosType } from '../../types/jogos.tsx';

export default function TopGames() {
  const [generos, setGeneros] = useState<string[]>([]);
  const [topGames, setTopGames] = useState<JogosType[]>([]);
  const [selectedGender, setSelectedGender] = useState('');

  function handleSelectGender(genero: string) {
    api.fetchGamesGender(genero).then((data) => {

      setTopGames(data);
      setSelectedGender(genero);
    }).catch(error => {
      console.error("Erro ao buscar jogos:", error);
    });
  }


  useEffect(() => {
    if (generos.length <= 0) return;

    setTimeout(() => {
      api.fetchGamesGender("Battle royale").then((data) => {
        setTopGames(data);
      });
    }, 800);
  }, [generos]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.fetchAllGenders();
        setGeneros(data);
        setSelectedGender(data[0]);
      } catch (error) {
        console.error("Erro ao buscar gêneros:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='container-top-games'>
      <div style={{ marginTop: "2rem" }}><TituloSecao titulo='TOP 3' /></div>
      <div className='list-genders'>
        {generos?.map((genero, index) => (
          <div key={index} className='genero'>
            <GenderCard text={genero} cardSelected={selectedGender} onClick={handleSelectGender} />
          </div>
        ))}
      </div>
      <div className='top3'>
        {
          topGames?.map((game, index) => (
            <CardTop3
              key={index}
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
