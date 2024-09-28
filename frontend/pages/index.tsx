import React from 'react';
import Layout from '../components/layout';
import { Bell, MessageSquare, Video } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Inicio Rápido</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-2 w-full">
              Unirse a una Sala Aleatoria
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
              Crear Nueva Sala
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Salas Activas</h2>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Español para principiantes</span>
                <Video className="h-5 w-5 text-green-500" />
              </li>
              <li className="flex items-center justify-between">
                <span>English Conversation Club</span>
                <MessageSquare className="h-5 w-5 text-blue-500" />
              </li>
              <li className="flex items-center justify-between">
                <span>Français intermédiaire</span>
                <Video className="h-5 w-5 text-green-500" />
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Reto Diario</h2>
            <p className="mb-4">Aprende 5 nuevas palabras en tu idioma objetivo.</p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full">
              Comenzar Reto
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;