import React from 'react'
import "./styles.css"
import TituloSecao from './../TituloSecao/index.tsx';
import GenderCard from '../GenderCard/index.tsx';
import api from '../../hooks/generos.tsx';


export default function TopGames() {
  const [generos, setGeneros] = React.useState([]);

  React.useEffect(() => {
    api.fetchAllGenders().then((data) => {
      setGeneros(data);
    });
  }, []);

  return (
    <div className='container-top-games'>
      <div style={{ marginTop: "2rem" }}><TituloSecao titulo='TOP 3' /></div>
      <div className='list-genders'>
        {generos?.map(genero => (
          <div className='genero'><GenderCard text={genero} /></div>
        ))}
      </div>
      <div>C</div>
    </div>
  )
}
