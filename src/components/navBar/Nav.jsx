import { react } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegBell } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import './nav.css';
import { Link } from 'react-router-dom';

export default function NavBar(){
      return (
        <nav>
            <div className='opts'>
                <Link to='/movies/333'>Movies</Link>
                <Link>Series</Link>
                <Link to='/'>Home</Link>
                <Link>genres</Link>
            </div>
            <div className="search">
                <FaSearch size={13} className='search-icon'/>
                <input type="text" className='search-input'/>        
            </div>
            <div className='Nav-icons'>
                <FaRegBell size={20}/>
                <HiOutlineSquares2X2 size={20}/>
                <CgProfile size={20}/>
            </div>
        </nav>
      )
    }