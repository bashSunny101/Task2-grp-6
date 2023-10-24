import './nav.css'
import './logo.png'


function NavStyle() {
    return (
        <>
            
           <div className="navbar">
             <div className="logo"></div>
             <div className="nav-opt">
             <a href ="#">Movies</a>
             <a href ="#">Rated Movies</a>
             <a href ="#">Watchlist</a>
             <a href ="#">Sign in</a>
             </div>
           </div>  

           <div className="top-ratedImg">
                <p id="top">Welcome.</p>
                <p>Millions of movies to discover. Explore now .</p>
                <div id="search">
                    <input type='text' placeholder='Search for a movie'/>
                    <button id='search-button'>Search</button>
                </div>
           </div>
        </>
    )
}

export default NavStyle ;