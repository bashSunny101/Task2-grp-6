import "./nav.css";
import { useAuth0 } from "@auth0/auth0-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <div className="h-100 w-full flex flex-wrap outline-none bg-black pb-5">
        <div className="font-cursive flex flex-wrap gap-x-10 p-6 px-10 justify-around w-full font-semibold">
          <a href="#" className="hover:text-sky-700 ">
            <FontAwesomeIcon icon={faHouse} />
          </a>
          <a href="#" className="hover:text-sky-700 ">
            Movies
          </a>
          <a href="#" className="hover:text-sky-700 ">
            Bookmarks
          </a>
          <a href="#" className="hover:text-sky-700 ">
            My Watchlist
          </a>
          <div className="flex  text-center hover:border-4 border-sky-700">
            <input
              type="search"
              className="w-80 text-black rounded-l px-2 border-r-0  "
              placeholder="Search"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className=" bg-white text-black py-1 px-1 rounded-r border-l-0 hover:text-sky-700"
            />
          </div>
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button  onClick={() => loginWithRedirect()}>Log In</button>
          )}

        </div>
      </div>
      <div className="top-ratedImg">
        <p id="top">Welcome.</p>
        <p>Millions of movies to discover. Explore now .</p>
        <div id="search-opt">
          <input type="text" placeholder="Search for a movie" />
          <button id="search-button">Search</button>
        </div>
      </div>
    </>
  );
}

export default Nav;
