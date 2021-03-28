import React from 'react'
import logo from '../../images/logo_pokemon.svg';
import face_ash from '../../images/ash_face.jpg';

export const Sidebar = () => {
    return (
      <aside className="home__sidebar">
        <div className="home__sidebar-navbar">
          <h3 className="mt-5">
            <i className="far fa-moon"></i>
            <span>Alex Pren</span>
            <div>
              <img
                className="home__picture-title"
                src={logo}
                alt="Logo pokemon"
              />
            </div>
            <div className="mt-10">
              <img
                className="home__picture-face"
                src={face_ash}
                alt="Logo pokemon"
              />
            </div>
            <div className="mt-5">
              <h3 className="title">ashk123</h3>
            </div>
            <h3>Work hard on your test</h3>

            <div className="footer btn-logout">
              <button
                type="submit"
                className="btn btn-primary btn-block center"
              >
                {" "}
                <i class="fas fa-sign-out-alt fa-rotate-180"></i>
                log out
              </button>
            </div>
          </h3>
        </div>
      </aside>
    );
}
