import React from 'react';
import { Chip } from './Chip';


export const Card = ({item}) => {
    return (
      <div className="card__content">
        <p className="card__pokemon-name"></p>
        <p className="card__pokemon-id"></p>
        <img className="card__pokemon-img" src={item.url} alt="pokemon" />
        <Chip type={"type"} />
      </div>
    );
}
