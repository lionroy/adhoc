import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: #121212;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 meh. page is missing</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Container>
      <PageTitle>Page Not Found</PageTitle>
      <Text>
        We're sorry for this inconvenience try heading back <Link to="/">home</Link>.
      </Text>
    </Container>
  </Layout>
)

export default NotFoundPage
