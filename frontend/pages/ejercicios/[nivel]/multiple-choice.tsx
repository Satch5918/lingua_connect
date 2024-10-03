import React, { useState } from 'react';
import Layout from '../../../components/layout';

const MultipleChoice = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const submitQuiz = () => {
    // Aquí tendrías tu lógica para verificar la respuesta
    const correctAnswer = "respuestaCorrecta";
    if (selectedAnswer === correctAnswer) {
      setScore(1);
    } else {
      setScore(0);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Ejercicio de Opción Múltiple</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">¿Cuál es la traducción correcta de "Manzana"?</p>
          <ul className="mb-4">
            <li>
              <button
                className={`bg-gray-200 p-2 rounded w-full mb-2 ${selectedAnswer === 'a' ? 'bg-blue-300' : ''}`}
                onClick={() => handleAnswer('a')}
              >
                A) Apple
              </button>
            </li>
            <li>
              <button
                className={`bg-gray-200 p-2 rounded w-full mb-2 ${selectedAnswer === 'b' ? 'bg-blue-300' : ''}`}
                onClick={() => handleAnswer('b')}
              >
                B) Orange
              </button>
            </li>
          </ul>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={submitQuiz}
          >
            Enviar respuesta
          </button>

          {score !== null && (
            <p className="mt-4 text-lg text-center">
              {score === 1 ? '¡Correcto!' : 'Respuesta incorrecta, intenta nuevamente.'}
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MultipleChoice;
