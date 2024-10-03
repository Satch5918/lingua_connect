import React from 'react';
import Layout from '../components/layout';

const Recursos: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">Recursos para Aprender Idiomas</h1>
        
        {/* Sección de Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Música */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Música</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Escucha canciones en el idioma que deseas aprender para mejorar tu comprensión auditiva y vocabulario.
            </p>
            <ul>
              <li><a href="https://open.spotify.com/" className="text-blue-500 hover:underline">Spotify</a></li>
              <li><a href="https://www.apple.com/apple-music/" className="text-blue-500 hover:underline">Apple Music</a></li>
            </ul>
          </div>
          
          {/* Juegos */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Juegos</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Diviértete mientras aprendes con juegos interactivos diseñados para practicar idiomas.
            </p>
            <ul>
              <li><a href="https://www.duolingo.com/" className="text-blue-500 hover:underline">Duolingo</a></li>
              <li><a href="https://www.memrise.com/" className="text-blue-500 hover:underline">Memrise</a></li>
            </ul>
          </div>

          {/* Podcasts */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Podcasts</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mejora tu habilidad auditiva con estos podcasts recomendados.
            </p>
            <ul>
              <li><a href="https://www.spotify.com/" className="text-blue-500 hover:underline">Spotify Podcasts</a></li>
              <li><a href="https://www.apple.com/apple-podcasts/" className="text-blue-500 hover:underline">Apple Podcasts</a></li>
            </ul>
          </div>

          {/* Películas y Series */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Películas y Series</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mira películas y series en el idioma que estás aprendiendo para mejorar tu vocabulario y comprensión.
            </p>
            <ul>
              <li><a href="https://www.netflix.com/" className="text-blue-500 hover:underline">Netflix</a></li>
              <li><a href="https://www.hulu.com/" className="text-blue-500 hover:underline">Hulu</a></li>
            </ul>
          </div>

          {/* Otros Recursos */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Otros Recursos</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explora estos recursos adicionales que te ayudarán en tu aprendizaje de idiomas.
            </p>
            <ul>
              <li><a href="https://www.bbc.co.uk/languages" className="text-blue-500 hover:underline">BBC Languages</a></li>
              <li><a href="https://www.fluentu.com/en/" className="text-blue-500 hover:underline">FluentU</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recursos;
