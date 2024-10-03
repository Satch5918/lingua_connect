import React from 'react';
import Layout from '../../components/layout';

const Chat = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Unirse a una Sala de Chat</h1>
        <p className="text-center mb-4">Haz clic en el botón para unirte a una sala de chat de texto.</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Unirse a una sala de chat
          </button>
        </div>
        {/* Aquí agregarías la lógica para unirse a una sala de chat */}
      </div>
    </Layout>
  );
};

export default Chat;
