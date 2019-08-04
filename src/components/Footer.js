import React, { useState } from 'react';
import { Link } from 'gatsby';

import { Footer, Container, Content, Icon } from 'react-bulma-components';

export default ({}) => {

  return (
    <Footer>
      <Container align="center">
        <a href="https://twitter.com/lenilsonjr_" target="_blank">
          <Icon><span className="fab fa-twitter" /></Icon>
          Twitter
        </a>
        &nbsp;&nbsp;
        <a href="https://instagram.com/lenilsonjr" target="_blank">
          <Icon><span className="fab fa-instagram" /></Icon>
          Instagram
        </a>
        &nbsp;&nbsp;
        <a href="https://nomadlist.com/@lenilsonjr" target="_blank">
          <Icon><span className="fas fa-map" /></Icon>
          Nomadlist 
        </a>
      </Container>
    </Footer>
  )
}
