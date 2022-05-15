import React from 'react'
import "./navbar.css"
import logo from "./svgLogo.svg"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    
        <div className='navbar container'>
            <div className='leftSide'>
            <Link className='navbarLink' to="/"><img className='logo' src={logo} alt="" /></Link>
            </div>
            
            <div className="centerSider">
                <ul className='navList'>
                
                <Link className='navbarLink' to="/"><li className='navListItem'>Home</li></Link>
                <Link className='navbarLink' to="/popular"><li className='navListItem'>Popular</li></Link>
                <Link className='navbarLink' to="/now_playing"><li className='navListItem'>Now Playing</li></Link>
                <Link className='navbarLink' to="/top_rated"><li className='navListItem'>Top Rated</li></Link>
                </ul>
            </div>

            <div className='rightSide'>
                
                    <p className='att'>Data provided by TMDB</p>
                
            </div>
        </div>
    </>
  )
}
