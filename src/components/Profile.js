import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Section, Container, Hero, Heading, Tile, Image, Columns, Media, Content } from 'react-bulma-components';
import { darken } from 'polished'

import profile from '../images/me.jpg';
import expireLogo from '../images/expire.png';
import matterLogo from '../images/matter.png';
import mapMarker from '../images/map.png';

const ProfileContainer = styled(Container)`
  max-width: 1152px;
  width: 100%;
`;

const ScrollDown = styled.div`
  @-webkit-keyframes scroll {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
    }
    20% {
      -webkit-transform: rotate(-45deg) translate(-10px, 10px);
    }
    40% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
    }
  }
  @keyframes scroll {
    0% {
      transform: rotate(-45deg) translate(0, 0);
    }
    20% {
      transform: rotate(-45deg) translate(-10px, 10px);
    }
    40% {
      transform: rotate(-45deg) translate(0, 0);
    }
  }
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: ${props => props.theme.white};
  font : normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
  cursor: pointer;
  &:hover {
    ${props => props.animate && "opacity: .5;"}
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 5px solid ${props => props.theme.white};
    border-bottom: 5px solid ${props => props.theme.white};
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    ${props => props.animate &&
      `-webkit-animation: scroll 2s infinite;
       animation: scroll 2s infinite;`
    }
    box-sizing: border-box;
  }
`;

const ProfileImage = styled(Image)`
  display: inline-block;
  margin-bottom: 10px;
  img {
    border-radius: 20px;
  }
`;

const ProjectTile = styled(Tile)`
  background-color: ${props => props.color};

  &:hover {
    background: linear-gradient(71deg, ${props => props.color} 0%, ${props => darken(0.1, props.color)} 35%, ${props => darken(0.2, props.color)} 100%);
    box-shadow: 0 0 0 4px #21292c,0 0 0 7px ${props => props.color};
  }
`;

const SocialIcons = styled.div`
  a {
    font-size: 14px;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

const LocationTile = styled(Tile)`
  background-color: ${props => props.theme.red};
`;

export default ({isHome}) =>  {

  const [currentLocation, setCurrentLocation] = useState(null);
  const [nextLocation, setNextLocation] = useState(null);

  useEffect(() => {
    fetch('https://nomadlist.com/@lenilsonjr.json').then(response => response.json().then((json) => {
      const location = json.location;
      setCurrentLocation(`${location.now.city} ${location.now.country_code.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397)) }`);
      location.next && setNextLocation(`${location.next.city} ${location.next.country_code.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397)) }`);
    }))
  }, []);

  if ( isHome ) {
    return (
      <Hero color="dark" size="fullheight">
        <Hero.Body>
          <ProfileContainer>
            <Tile kind="ancestor">
              <Tile size={12} vertical>
                <Tile>
                  <Tile kind="parent" vertical>
                    <Tile renderAs="article" kind="child" color="primary" align="center">
                      <ProfileImage size="220x220" alt="Lenilson" src={profile} />
                      <p className="title">👋 Hi, I'm Lenilson</p>
                      <p className="subtitle">
                        <SocialIcons>
                          <a href="https://github.com/lenilsonjr" target="_blank" title="coding">👨‍💻</a>
                          <a href="https://twitter.com/lenilsonjr_" target="_blank" title="philosophizing">🤔</a>
                          <a href="https://nomadlist.com/@lenilsonjr" target="_blank" title="traveling">✈️</a>
                        </SocialIcons>
                      </p>
                    </Tile>
                    <Tile renderAs="article" kind="child" notification color="info" align="center">
                      <Heading subtitle renderAs="p">
                        👉 I'm a freeelancer web developer 👨‍💻, working with Ruby and JavaScript. I live out of a suitcase and travel around the world to find nice food and fast WiFi
                      </Heading>
                    </Tile>
                  </Tile>
                  <Tile kind="parent" vertical>

                    <ProjectTile renderAs="a" kind="child" notification color="#5da099" href="https://expire.com.br/" target="_blank">
                      <div className="columns is-vcentered">
                        <div className="column is-narrow">
                          <figure className="image is-96x96">
                            <img src={expireLogo} />
                          </figure>
                        </div>
                        <div className="column">
                          <h1 className="title">Expire Psicologia 🇧🇷</h1>
                          <h3 className="subtitle">Co-founder & CTO</h3>
                        </div>
                      </div>
                    </ProjectTile>

                    <ProjectTile renderAs="a" kind="child" notification color="#000000" href="https://matterproductstudio.com/" target="_blank">
                      <div className="columns is-vcentered">
                        <div className="column is-narrow">
                          <figure className="image is-96x96">
                            <img src={matterLogo} />
                          </figure>
                        </div>
                        <div className="column">
                          <h1 className="title">Matter Product Studio 🇺🇸</h1>
                          <h3 className="subtitle">Web Engineer</h3>
                        </div>
                      </div>
                    </ProjectTile>

                    <ProjectTile renderAs="a" kind="child" notification color="#B76CFD" href="https://nomadlist.com/@lenilsonjr" target="_blank">
                      <div className="columns is-vcentered">
                        <div className="column is-narrow">
                          <figure className="image is-96x96">
                            <img src={mapMarker} />
                          </figure>
                        </div>
                        <div className="column">
                          { currentLocation ? <h1 className="title">Currently in {currentLocation}</h1> : <h1 className="title">Whereabouts unknown 🌎</h1>}
                          { nextLocation && <h3 className="subtitle">Leaving for {nextLocation} next</h3> }
                        </div>
                      </div>
                    </ProjectTile>

                  </Tile>
                </Tile>
                <Tile kind="parent">
                  <Tile renderAs="article" kind="child" align="center">
                    <ScrollDown animate />
                  </Tile>
                </Tile>
              </Tile>
            </Tile>

          </ProfileContainer>
        </Hero.Body>
      </Hero>
    )
  } else {
    return (
      <Hero color="dark">
        <Hero.Body>
          <ProfileContainer>
            <Columns>
              <Columns.Column size="half" offset="one-quarter">
                <Media>
                  <Media.Item renderAs="figure" position="left">
                    <ProfileImage renderAs="p" size={128} alt="Lenilson" src={profile} />
                  </Media.Item>
                  <Media.Item>
                    <Content>
                      <Heading size={3}>Hello, I'm Lenilson 👋</Heading>
                      <Heading subtitle size={6}>
                        I'm a freeelancer developer and maker currently in {currentLocation}. I live out of a suitcase and travel around the world to find nice food and fast WiFi. You can get to know more about me <a href="/">here</a>. 🚀
                      </Heading>
                    </Content>
                  </Media.Item>
                </Media>
              </Columns.Column>
            </Columns>
          </ProfileContainer>
        </Hero.Body>
      </Hero>
    )
  }
}
