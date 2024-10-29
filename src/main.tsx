import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './Components/AuthProvider.tsx'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider >
      <App />
    </ChakraProvider>
      </QueryClientProvider>
      </AuthProvider>
  </StrictMode>,
)
