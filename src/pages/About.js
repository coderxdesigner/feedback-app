import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

const About = () => {
  return (
    <Card>
      <h1>About</h1>
      <p>It's a story of a girl, who cried a river and drowned the whole world.</p>
      <p>
        <Link to={'/'}>Return Home</Link>
      </p>
    </Card>
  )
}

export default About
