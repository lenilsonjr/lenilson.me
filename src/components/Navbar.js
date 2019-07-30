import React from 'react';
import config from '../utils/siteConfig'

export default ({color, site}) => {
  
  const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
  const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

  return(
    <nav className={`navbar is-${color}`}>
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <strong>🚀 lenilsonjr</strong>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="tabs is-right">

              <span className="navbar-item">
                <a className="button is-white is-outlined" href="/">
                  Home
                </a>
              </span>

              { site.twitter && 
                <span className="navbar-item">
                  <a className="button is-white is-outlined" href={twitterUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </span>
               }

            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
