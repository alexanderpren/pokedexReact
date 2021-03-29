import React, { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { GridComponent } from "./GridComponent";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { getPokemons } from "../../actions/pokemon";
import { Detail } from "./Detail";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);


  const detail = useSelector((state) => state.pokemon.detail);
  const open = useSelector((state) => state.pokemon.open);
  return (
    <div className="home__main-content">
      <Sidebar />
      <main>
        <Navbar open={open} />
        {open ? <Detail detail={detail}/> :  <GridComponent /> }
       
      </main>
    </div>
  );
};
