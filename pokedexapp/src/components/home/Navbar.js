import React from 'react'

export const Navbar = () => {
  return (
    <>
      <div className="topnav__content mt-10">
        <div className="search-container">
          <form action="">
            <input type="text" placeholder="Search" name="search"></input>
            <button type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
