import React,{useState,useEffect} from 'react'
import {back,filter} from "../../actions/pokemon"
import {useDispatch} from 'react-redux'



export const Navbar = ({open}) => { 
  const dispatch = useDispatch();
  
  const handleClose =() => {

    dispatch(back());
  }

 
  
  const  BtnBack = ({handleClose}) => {
    return (
      <button type ="submit" className="btn btn-back" onClick={handleClose}>
        <i class="fas fa-arrow-left"></i>
      </button>
    )
  }
  

  const [word,setWord] = useState(undefined)
 

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
        <div>{open && <BtnBack handleClose={handleClose} />}</div>
        <div className="search-container">
          {" "}
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
        </div>
      </div>
    </>
  );
};
