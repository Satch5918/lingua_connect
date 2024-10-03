import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../../components/layout';

const Nivel: React.FC = () => {
  const router = useRouter();
  const { nivel } = router.query;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Ejercicios de {nivel}</h1>
        <button
          onClick={() => router.push(`/ejercicios/${nivel}/gramatica`)}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-full flex items-center justify-center hover:bg-green-600"
        >
          Ir a Gramática
        </button>
        <button
          onClick={() => router.push(`/ejercicios/${nivel}/multiple-choice`)}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-full flex items-center justify-center hover:bg-green-600"
        >
          Ir a Multiple Choice
        </button>
      </div>
    </Layout>
  );
};

export default Nivel;
