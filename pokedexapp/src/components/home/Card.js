import React from 'react';
import { Chip } from './Chip';


export const Card = ({item}) => {

  const url_img_default = item.data.detail.sprites.other["official-artwork"].front_default
  const id_pokemon = item.data.detail.id
    return (
      <div className="card__content card__shadow">
        <a href="#">
          <div className="card__text">
            <p className="card__pokemon-name">{item.name}</p>
            <p className="card__pokemon-id">00{id_pokemon}</p>
          </div>

          <img
            className="card__pokemon-img"
            src={url_img_default}
            alt="pokemon"
          />

          <Chip type={"type"} />
        </a>
      </div>
    );
}
