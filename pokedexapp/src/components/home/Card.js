import React from 'react';
import { Chip } from './Chip';


export const Card = ({item}) => {

  const url_img_default = item.data.detail.sprites.front_default
  const id_pokemon = item.data.detail.id
    return (
      <div className="card__content">
        <p className="card__pokemon-name">{item.name}</p>
        <p className="card__pokemon-id">{id_pokemon}</p>
        <img className="card__pokemon-img" src={url_img_default} alt="pokemon" />
        <Chip type={"type"} />
      </div>
    );
}
