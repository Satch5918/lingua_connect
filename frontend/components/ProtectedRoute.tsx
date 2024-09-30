// src/components/ProtectedRoute.tsx
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/'); // Si no está autenticado, redirigir al login
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Puedes agregar un loader si prefieres
  }

  return <>{children}</>;
};

export default ProtectedRoute;
