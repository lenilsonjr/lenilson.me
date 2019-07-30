import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Section, Container, Hero, Heading, Tile, Image, Columns, Media, Content } from 'react-bulma-components';

import profile from '../images/me.jpg';

const ProfileContainer = styled(Container)`
  max-width: 1152px;
  width: 1152px; 
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
  color: ${props => props.theme.primary};
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
    border-left: 5px solid ${props => props.theme.primary};
    border-bottom: 5px solid ${props => props.theme.primary};
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

const UpToArticle = styled.article`
  text-align: justify!important;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  ul > li {
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
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
  background: ${props => props.backgroundImage} center center no-repeat;
`;

export default ({isHome}) =>  {

  const [currentLocation, setCurrentLocation] = useState();
  const [nextLocation, setNextLocation] = useState();
  const [locationBackground, setLocationBackground] = useState();
  const [reading, setReading] = useState();
  const [listening, setListening] = useState();

  useEffect(() => {
    fetch('/now.json').then(response => response.json().then((json) => {
      setCurrentLocation(json.location.html);
      setNextLocation(json.next_location.html);
      setLocationBackground(json.location.image);
      setReading(json.reading);
      setListening(json.listening);
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
                      <p className="title">👋 Hello, I'm Lenilson</p>
                      <p className="subtitle">
                        <SocialIcons>
                          <a href="https://github.com/lenilsonjr" target="_blank" title="coding">👨‍💻</a>
                          <a href="https://www.goodreads.com/lenilsonjr" target="_blank" title="reading">📚</a>
                          <a href="https://wip.chat/@lenilsonjr" target="_blank" title="shipping">🚧</a>
                          <a href="https://www.last.fm/user/lenilsonjr" target="_blank" title="listening">🎶</a>
                          <a href="https://twitter.com/lenilsonjr_" target="_blank" title="philosophizing">🤔</a>
                          <a href="https://nomadlist.com/@lenilsonjr" target="_blank" title="traveling">✈️</a>
                        </SocialIcons>
                      </p>
                    </Tile>
                    <Tile renderAs="article" kind="child" notification color="info" align="center">
                      <Heading subtitle renderAs="p">
                        👉 I'm a freeelancer web developer 👨‍💻, usually working with Ruby and JavaScript. I live out of a backpack and usually travel around the world to find nice food and fast WiFi
                      </Heading>
                    </Tile>
                  </Tile>
                  <Tile kind="parent">
                    <Tile renderAs={UpToArticle} kind="child" notification color="grey-dark" className="has-background-grey-dark">
                      <div>
                        <Heading>🤔 What I'm up to lately</Heading>
                        <ul>
                          <li>
                            📚
                            Reading <a target="_blank" href="https://www.goodreads.com/user/show/73188841-lenilson-jr">{reading}</a>
                          </li>
                          <li>
                            🎶
                            Listening a lot to <a target="_blank" href="https://www.last.fm/user/lenilsonjr">{listening}</a>
                          </li>
                          <li>
                            ✈️
                            In Europe for Summer! 
                          </li>
                          <li>
                            👔
                            Bootstraping <a target="_blank" href="http://expire.com.br">Expire</a> with Heitor and Maria
                          </li>
                          <li>
                            👨‍💻
                            Contracting
                          </li>
                        </ul>
                      </div>
                    </Tile>
                  </Tile>
                </Tile>
                <Tile kind="parent">
                  <LocationTile renderAs="article" kind="child" notification color="link" backgroundImage={locationBackground}>
                    <Heading>📌 Currently in {currentLocation}</Heading>
                    <Heading subtitle>🛫 {nextLocation}</Heading>
                  </LocationTile>
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
                        I'm a freeelancer developer and maker currently in {currentLocation}. I live out of a backpack and usually travel around the world to find nice food and fast WiFi. You can get to know more about me <a href="/">here</a>. 🚀
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
