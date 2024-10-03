import React from 'react';
import Layout from '../../components/layout';

const Juegos = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Unirse a una Sala de Juegos</h1>
        <p className="text-center mb-4">Haz clic en el botón para unirte a una sala de juegos interactivos.</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Unirse a una sala de juegos
          </button>
        </div>
        {/* Aquí agregarías la lógica para unirse a una sala de juegos */}
      </div>
    </Layout>
  );
};

export default Juegos;
