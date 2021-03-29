import React from "react";
import { Chip } from "./Chip";
import { getDetail } from "../../actions/pokemon";
import { useDispatch } from "react-redux";

export const Card = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(getDetail(parseInt(e.target.id)));
  };

  const url_img_default =
    item.data.detail.sprites.other["official-artwork"].front_default;
  const id_pokemon = item.data.detail.id;
  const types = item.data.detail.types;
  return (
    <div className="card__content card__shadow">
      <div style={{ cursor: "pointer" }} onClick={(e) => handleClick(e)}>
        <div className="card__text">
          <p className="card__pokemon-name">{item.name}</p>
          <p className="card__pokemon-id">00{id_pokemon}</p>
        </div>

        <img
          key={id_pokemon}
          id={index}
          className="card__pokemon-img"
          src={url_img_default}
          alt="pokemon"
        />

        <Chip types={types} />
      </div>
     
    </div>
  );
};
