// src/pages/_app.tsx
import { AuthProvider } from '../context/authContext';
import '../styles/globals.css'; // Tu hoja de estilos globales

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
