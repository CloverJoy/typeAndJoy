import React from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from './theme.js';
import App from './components/App';

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </>,
  document.getElementById('root'),
);