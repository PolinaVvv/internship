import React from 'react'
import ReactDOM from 'react-dom/client'

// Screens
import Root from './screens/Root.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Root />
    </ChakraProvider>
    
  </React.StrictMode>
)
