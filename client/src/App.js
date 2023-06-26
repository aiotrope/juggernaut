import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'

import Header from './components/Header'
import Home from './pages/Home'
import Book from './pages/Book'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  const [books, setBooks] = useState([])
  const [book, setBook] = useState({})
  const [counter, setCounter] = useState(0)

  return (
    <Router>
      <Paper style={{ height: '100vh' }}>
        <Header />
        <Container>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <Home books={books} setBooks={setBooks} counter={counter} setCounter={setCounter} />
              }
            />
            <Route
              path='/book/:name'
              element={<Book book={book} setBook={setBook} setCounter={setCounter} />}
            />
            <Route path={'/about'} element={<About />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
      </Paper>
    </Router>
  )
}

export default App
