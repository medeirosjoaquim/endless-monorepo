import React from 'react'
import { ChakraProvider, Container } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
} from "react-router-dom"

import NavBar from './components/NavBar/NavBar'
import './App.scss'
import Content from './components/Content/Content'
import { Provider } from 'react-redux'
import { store } from './store/store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChakraProvider >
          <Router>
            <NavBar />
            <Container maxW="container.xl"
              h="100%"
              w="100%"
              p={5}
              centerContent >
              <Content />
            </Container>
          </Router>
        </ChakraProvider>
      </Provider>
    </div>
  )
}

export default App
