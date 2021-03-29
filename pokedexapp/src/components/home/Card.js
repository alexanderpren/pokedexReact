import React from "react";
import { Chip } from "./Chip";
import { getDetail } from "../../actions/pokemon";
import { useDispatch } from "react-redux";

export const Card = ({ index, state }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(getDetail(parseInt(e.target.id)));
  };
  let current_index = parseInt(index);
  console.log("Index Actual:" + current_index);

  const pokemonName = state[index].name;
  const url_img_default =
    state[index].data.detail.sprites.other["official-artwork"].front_default;
  const id_pokemon = state[index].data.detail.id;
  const types = state[index].data.detail.types;
  return (
    <div className="card__content card__shadow">
      <div style={{ cursor: "pointer" }}>
        <div className="card__text">
          <p className="card__pokemon-name">{pokemonName}</p>
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
