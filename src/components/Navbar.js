import React from 'react';
import { Link } from 'gatsby';
import config from '../utils/siteConfig'

export default ({color, site}) => {
  
  const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null

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
              
              {site.navigation.map((navItem, i) => {
                  if (navItem.url.match(/^\s?http(s?)/gi)) {
                    return (
                      <span className="navbar-item" key={i}>
                        <a className="button is-white is-outlined" href={navItem.url} target="_blank" rel="noopener noreferrer">
                          {navItem.label}
                        </a>
                      </span>
                    )
                  } else {
                    return (
                      <span className="navbar-item" key={i}>
                        <Link className="button is-white is-outlined" to={navItem.url}>
                          {navItem.label}
                        </Link>
                      </span>
                    )
                  }
              })}
              
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
