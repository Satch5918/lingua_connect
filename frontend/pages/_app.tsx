// src/pages/_app.tsx
import { AuthProvider } from '../context/authContext';
import { ChakraProvider } from '@chakra-ui/react'; // Importa ChakraProvider
import '../styles/globals.css'; // Tu hoja de estilos globales

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider> {/* Envuelve tu aplicación con ChakraProvider */}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
