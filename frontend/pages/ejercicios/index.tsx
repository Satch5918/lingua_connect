import React from 'react';
import Layout from '../../components/layout';
import Link from 'next/link';

const Ejercicios: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Elige un nivel de ejercicio</h1>
        <div className="space-y-4">
          <Link href="/ejercicios/principiante" className="block bg-blue-500 text-white text-center p-4 rounded">Principiante</Link>
          <Link href="/ejercicios/intermedio" className="block bg-blue-500 text-white text-center p-4 rounded">Intermedio</Link>
          <Link href="/ejercicios/avanzado" className="block bg-blue-500 text-white text-center p-4 rounded">Avanzado</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Ejercicios;
