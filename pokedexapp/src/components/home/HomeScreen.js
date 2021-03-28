import React,{useState,useEffect} from 'react'
import { Sidebar } from './Sidebar'
import {Navbar} from "./Navbar"
import {GridComponent} from "./GridComponent"
import { Loader } from './Loader'
import {useDispatch} from 'react-redux'
import {getPokemons} from "../../actions/pokemon"



export const HomeScreen = () => {
  const dispatch = useDispatch();
  const [arrayPokemons] = useState([]);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="home__main-content">
      <Sidebar />

      <main>
        <Navbar />
        {arrayPokemons.length !== 0 ? (
          <GridComponent arrayPokemons={[]} />
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
}
