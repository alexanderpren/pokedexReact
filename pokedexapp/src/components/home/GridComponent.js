import React from 'react'
import {useSelector} from 'react-redux'
import { Card } from './Card'
import { Loader } from './Loader'

export const GridComponent = ({ arrayPokemons, filter }) => {
  const state = useSelector((state) => state.pokemon.arrayPokemons);

  

  return (
    <div className="grid__container mt-5">
      {state !== undefined ? (
        state.map((item) => {
          return <Card item={item} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}
