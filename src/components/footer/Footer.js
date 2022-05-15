import React from 'react'
import "./footer.css"
import logo from "./svgLogo.svg"

export default function Footer() {
  return (
    <>
    
        <div className='footer container'>
            
            
            <div className="centerFooterSider">
            
            <a className='navbarLink' href="https://www.themoviedb.org/" target="popup"><img className='logo' src={logo} alt="" /></a>
            <h4>Credits: &nbsp;</h4>
            <h5 className='footerAttribute'>This product uses the TMDB API but is not endorsed or certified by TMDB</h5>
            </div>
        </div>
    </>
  )
}
