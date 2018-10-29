import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>2018 freeCodeCamp JAMstack Hackathon</h1>
    <p>Nov 3rd - 4th, 2018</p>
    <p>Location: Downtown SF</p>
    <p>... more details to come... </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
