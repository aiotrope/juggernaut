import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Paper style={{ height: '100vh' }}>
        <Header />
        <Container>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/contact'} element={<Contact />} />
          </Routes>
        </Container>
      </Paper>
    </Router>
  )
}

export default App
