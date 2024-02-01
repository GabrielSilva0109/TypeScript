import React from 'react';
import { useState } from 'react'; // Remova se não estiver usando
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { Card } from './components/Card';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<h1>Conta</h1>}/>
            <Route path='/infoconta' element={<h1>Conta</h1>}/>
        </Routes>
        </Layout>
      </ChakraProvider>
      
    </BrowserRouter>
  );
}

export default App;
