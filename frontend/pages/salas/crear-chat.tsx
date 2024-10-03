import React from 'react';
import Layout from '../../components/layout';

const CrearChat = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Crear Sala de Chat</h1>
        <p className="text-center mb-4">Llena los campos para crear una nueva sala de chat de texto.</p>
        <div className="flex justify-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Crear nueva sala de chat
          </button>
        </div>
        {/* Aquí agregarías el formulario o lógica para crear una nueva sala de chat */}
      </div>
    </Layout>
  );
};

export default CrearChat;
