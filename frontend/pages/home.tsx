import React from 'react';
import Layout from '../components/layout';
import { Bell, MessageSquare, Video } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <Layout>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            Bienvenido a <span className="text-blue-600">Polyglot</span>, tu plataforma de aprendizaje de idiomas
          </h1>
          
          {/* Quick Start Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Inicio Rápido</h2>
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition-colors duration-300 mb-2">
                Unirse a una Sala Aleatoria
              </button>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-colors duration-300">
                Crear Nueva Sala
              </button>
            </div>

            {/* Active Rooms Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Salas Activas</h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">Español para Principiantes</span>
                  <Video className="h-6 w-6 text-green-500" />
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">English Conversation Club</span>
                  <MessageSquare className="h-6 w-6 text-blue-500" />
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">Français Intermédiaire</span>
                  <Video className="h-6 w-6 text-green-500" />
                </li>
              </ul>
            </div>

            {/* Daily Challenge Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reto Diario</h2>
              <p className="mb-4 text-gray-600">Aprende 5 nuevas palabras en tu idioma objetivo cada día.</p>
              <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 transition-colors duration-300">
                Comenzar Reto
              </button>
            </div>
          </div>

          {/* Notification section */}
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700">
              ¿Tienes dudas? Únete a nuestra comunidad para recibir actualizaciones y notificaciones.
            </p>
            <button className="mt-4 inline-flex items-center px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-300">
              <Bell className="h-6 w-6 mr-2" />
              Recibir Notificaciones
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
