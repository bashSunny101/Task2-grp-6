import './nav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse , faSearch} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function Header(){
    return(
        <>
          <div className='h-100 w-full flex flex-wrap outline-none bg-black pb-5'>
          <div className='font-cursive flex flex-wrap gap-x-10 p-6 px-10 justify-around w-full font-medium text-lg'>

          <NavLink to="/"  className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`} >
          <FontAwesomeIcon icon={faHouse} />
          </NavLink>


          <NavLink to="/movies" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`}>
            Movies
            </NavLink>

          <Link to="/" className='hover:text-blue-700 '>Bookmarks</Link>
          <Link to="/" className='hover:text-blue-700 '>My Watchlist</Link>

          <div className='flex  text-center hover:border-4 border-blue-700'>
          <input 
          type="search"
          className='w-80 text-black rounded-l px-2 border-none text-sm  '
          placeholder='Search'/>
          <FontAwesomeIcon icon={faSearch} className=' bg-white text-black py-1.5 px-1 rounded-r border-l-0 hover:text-blue-700' />
          </div>

          <NavLink to = "/signup" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`}>
            Signup
            </NavLink>

          </div>
          </div>
          
        </>
    )
}

export default Header