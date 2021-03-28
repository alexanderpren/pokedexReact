import React,{useState,useEffect} from 'react'
import {filter} from "../../actions/pokemon"
import {useDispatch} from 'react-redux'



export const Navbar = () => { 

  const [word,setWord] = useState(undefined)
  const dispatch = useDispatch();

  useEffect(() => {
    if (word != undefined){
      dispatch(filter(word));
    }
   
  }, [dispatch,word]);
  


  const handleChange = (e) => {
    e.preventDefault();
    setWord(e.target.value);

    
  
  }

  return (
    <>
      <div className="topnav__content mt-10">
        <div className="search-container">
          <form action="">
            <input
              type="text"
              placeholder="Search"
              name="search"
              value={word}
              onChange={handleChange}
            ></input>
            <button type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
