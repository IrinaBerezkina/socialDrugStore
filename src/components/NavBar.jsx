import React from 'react';

export default function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">SocialAptecka</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {!user ? (
              <>
                <a className="nav-link" href="/auth">Sign in</a>
                <a className="nav-link" href="/auth/reg">Sign up</a>
              </>
            ) : (
              <>
                <a className="nav-link active" aria-current="page" href="/bascket">Basket</a>
                <a className="nav-link" href="/lk">Personal account</a>
                <a className="nav-link" href="/auth/logout">Log out</a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
