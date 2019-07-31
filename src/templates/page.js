import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

import { Hero, Container, Heading } from 'react-bulma-components';

const PostHero = styled(Hero)`
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${props => props.backgroundImage}')
`;

const PostContainer = styled(Container)`
    padding-top: 1rem;
    padding-bottom: 1rem;
    max-width: 1152px;

    @media (min-width: 1281px) {
        width: 1152px;
        padding-right: 8rem;
        padding-left: 8rem;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        padding-right: 2rem;
        padding-left: 2rem;
    }

    font-size: 22px;
`;

const Page = ({ data, location }) => {
    const page = data.ghostPage

    const ref = useRef(null)
    useEffect(() => {
        if (ref.current) {
            window.scrollTo(0, ref.current.offsetTop)
        }
    }, [ref])

    return (
            <>
                <MetaData
                    data={data}
                    location={location}
                    type="article"
                />
                <Helmet>
                    <style type="text/css">{`${page.codeinjection_styles}`}</style>
                </Helmet>
                <Layout>
                    <span ref={ref} />
                    <PostHero color="dark" size="medium" backgroundImage={page.feature_image}>
                      <Hero.Body>
                        <Container align="center">
                          <Heading size={1}>{page.title}</Heading>
                        </Container>
                      </Hero.Body>
                    </PostHero>
                    <PostContainer>
                        <section
                            className="content load-external-scripts"
                            dangerouslySetInnerHTML={{ __html: page.html }}
                        />
                    </PostContainer>
                </Layout>
            </>
    )
}

Page.propTypes = {
    data: PropTypes.shape({
        ghostPage: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
    }
`
