import React from 'react';
import { useState } from 'react'; // Remova se não estiver usando
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { Card } from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ChakraProvider>
            <Layout>
              <Box>
                <Card />
              </Box>
            </Layout>
          </ChakraProvider>
        } />
        <Route path='/conta' element={
          <h1>Conta</h1>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
