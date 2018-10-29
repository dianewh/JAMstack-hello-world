import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi Coders</h1>
    <p>Are you ready build something awesome?</p>
    <p>Let's meet this Saturday for the Hackathon in SF</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">See Hackathon Details</Link>
  </Layout>
)

export default IndexPage
