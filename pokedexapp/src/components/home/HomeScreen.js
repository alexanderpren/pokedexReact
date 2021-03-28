import React, { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { GridComponent } from "./GridComponent";

import { useDispatch } from "react-redux";
import { getPokemons } from "../../actions/pokemon";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="home__main-content">
      <Sidebar />
      <main>
        <Navbar />
        <GridComponent />
      </main>
    </div>
  );
};
