import React,{useState} from 'react'
import { Sidebar } from './Sidebar'
import {Navbar} from "./Navbar"
import {GridComponent} from "./GridComponent"
import { Loader } from './Loader'



export const HomeScreen = () => {
const[arrayPokemons]= useState([])




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
