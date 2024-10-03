import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import UserProfile from '../components/UserProfileCard'; // Importa el nuevo componente
import { Video, MessageSquare } from 'lucide-react';

const HomePage: React.FC = () => {
  const router = useRouter();

  // Funciones para manejar la navegación
  const handleJoinRandomRoom = () => {
    router.push('/salas');
  };

  const handleCreateNewRoom = () => {
    router.push('/salas/crear-videollamada');
  };

  const handleDailyChallenge = () => {
    router.push('/ejercicios');
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <Layout>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* User Profile Component */}
          <UserProfile /> {/* Agrega el componente de perfil aquí */}
          
          {/* Quick Start Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Inicio Rápido</h2>
              <button
                onClick={handleJoinRandomRoom}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700 transition-colors duration-300 mb-2"
              >
                Unirse a una Sala Aleatoria
              </button>
              <button
                onClick={handleCreateNewRoom}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 transition-colors duration-300"
              >
                Crear Nueva Sala
              </button>
            </div>

            {/* Salas Activas */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Salas Activas</h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="font-medium text-gray-600 dark:text-gray-300">Español para Principiantes</span>
                  <Video className="h-6 w-6 text-green-500" />
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium text-gray-600 dark:text-gray-300">English Conversation Club</span>
                  <MessageSquare className="h-6 w-6 text-blue-500" />
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium text-gray-600 dark:text-gray-300">Français Intermédiaire</span>
                  <Video className="h-6 w-6 text-green-500" />
                </li>
              </ul>
            </div>

            {/* Reto Diario */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Reto Diario</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">Aprende 5 nuevas palabras en tu idioma objetivo cada día.</p>
              <button
                onClick={handleDailyChallenge}
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700 transition-colors duration-300"
              >
                Comenzar Reto
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
