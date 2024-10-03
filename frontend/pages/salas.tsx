import React from 'react';
import { Video, MessageSquare, Gamepad } from 'lucide-react';
import Layout from '../components/layout';
import { useRouter } from 'next/router'; // Importamos el hook useRouter

const Salas: React.FC = () => {
  const router = useRouter(); // Inicializamos el hook useRouter

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">Salas de Conversación</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sala de Videollamada */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Salas de Videollamada</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Únete a una sala de videollamada para practicar conversación en tiempo real.
            </p>
            <button
              onClick={() => router.push('/salas/videollamada')}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full flex items-center justify-center hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              <Video className="w-5 h-5 mr-2" />
              Unirse a una sala
            </button>
            <button
              onClick={() => router.push('/salas/crear-videollamada')}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-full flex items-center justify-center hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
            >
              Crear nueva sala
            </button>
          </div>

          {/* Sala de Chat */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Salas de Chat</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Conversa con otros usuarios mediante texto en tiempo real.
            </p>
            <button
              onClick={() => router.push('/salas/chat')}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full flex items-center justify-center hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Unirse a una sala
            </button>
            <button
              onClick={() => router.push('/salas/crear-chat')}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-full flex items-center justify-center hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
            >
              Crear nueva sala
            </button>
          </div>

          {/* Sala de Juegos */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Salas de Juegos</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Participa en juegos interactivos de preguntas y respuestas.
            </p>
            <button
              onClick={() => router.push('/salas/juegos')}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full flex items-center justify-center hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              <Gamepad className="w-5 h-5 mr-2" />
              Unirse a una sala de juegos
            </button>
            <button
              onClick={() => router.push('/salas/crear-juego')}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-full flex items-center justify-center hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
            >
              Crear nuevo juego
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Salas;
