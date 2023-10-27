import './nav.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse , faSearch} from '@fortawesome/free-solid-svg-icons';

function Nav(){
    return(
        <>
          <div className='h-100 w-full flex flex-wrap outline-none'>
          <div className='font-cursive flex flex-wrap gap-x-10 p-6 px-10 justify-around w-full'>
          <a href="#" className='hover:text-sky-700 '><FontAwesomeIcon icon={faHouse} /></a>
          <a href="#" className='hover:text-sky-700 '>Movies</a>
          <a href="#" className='hover:text-sky-700 '>Bookmarks</a>
          <a href="#" className='hover:text-sky-700 '>My Watchlist</a>
          <div className='flex  text-center hover:border-4 border-sky-700'>
          <input 
          type="search"
          className='w-80 text-black rounded-l px-2 border-r-0  '
          placeholder='Search'/>
          <FontAwesomeIcon icon={faSearch} className=' bg-white text-black py-1 px-1 rounded-r border-l-0 hover:text-sky-700' />
          </div>

          <a href="#" className='hover:text-sky-700 '>Login</a>
          </div>
          </div>
          <div className="top-ratedImg">
                <p id="top">Welcome.</p>
                <p>Millions of movies to discover. Explore now .</p>
                <div id="search-opt">
                    <input type='text' placeholder='Search for a movie'/>
                    <button id='search-button'>Search</button>
                </div>
           </div>
        </>
    )
}

export default Nav