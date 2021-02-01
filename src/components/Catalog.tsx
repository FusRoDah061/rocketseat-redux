import React from 'react';
import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {
  /*
    O hook receberá uma função que recebe o estado todo e permite que
    seja retornado para o compoenente apenas o que será útil para ele.
  */
  const catalog = useSelector(state => state);
  /*
    Dessa forma, o componente não será atualizado quando o estado todo mudar,
    e sim quando o que é retornado pelo useSelector mudar.
  */

  console.log(catalog);

  return (
    <h1>Catálogo</h1>
  )
}

export default Catalog;
