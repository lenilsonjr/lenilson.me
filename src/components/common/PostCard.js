import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

import { Hero, Container, Columns, Heading } from 'react-bulma-components'

const PostHero = styled(Hero)`
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${props => props.backgroundImage}') no-repeat center;
    background-size: cover;
`;

const PostCard = ({ post }) => {
    console.log(post)
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
      <PostHero color="dark" size="medium" backgroundImage={post.feature_image}>
        <Link to={url}>
          <Hero.Body>
            <Container align="center">
              <Columns>
                <Columns.Column size="three-fifths" offset="one-fifth">
                  <Heading size={1}>{post.title}</Heading>
                  <Heading subtitle size={5}>{post.excerpt}</Heading>
                  <Heading subtitle>{post.created_at_pretty}</Heading>
                </Columns.Column>
              </Columns>
            </Container>
          </Hero.Body>
        </Link>
      </PostHero>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
