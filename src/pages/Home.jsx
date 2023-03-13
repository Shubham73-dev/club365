import React from 'react'
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar'
import FooterSection from '../components/FooterSection'
import { Approutes } from '../settings/routes/app-routes'

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Navbar />
        <Approutes />
      </Container>
      <FooterSection />
    </>
  )
}

export default Home