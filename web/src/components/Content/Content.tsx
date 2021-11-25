import { Box } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Routes, Route } from 'react-router'
import Playlists from '../Playlists'
import Podcasts from '../Podcasts'

const Content = () => {
  return (
    <Box
      shadow="lg"
      height="200"
      h="90%" w="80%"
      rounded={{ sm: "3xl" }}
      bg={useColorModeValue("gray.300", "gray.500")}
      pos="relative" py={3} >
      <Routes>
        <Route path="/podcasts" element={<Podcasts />}>
        </Route>
        <Route path="/playlists" element={<Playlists />}>
        </Route>
        <Route path="/home" element={<Playlists />}>
        </Route>
      </Routes>
    </Box>
  )
}

export default Content
