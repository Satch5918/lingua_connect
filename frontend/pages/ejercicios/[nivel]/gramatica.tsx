import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../../components/layout';

const Gramatica: React.FC = () => {
  const router = useRouter();
  const { nivel } = router.query; // Obtenemos el nivel dinámico de la URL

  const ejercicios = {
    principiante: [
      { pregunta: 'Selecciona el artículo correcto: ___ casa', opciones: ['El', 'La', 'Los', 'Las'], respuestaCorrecta: 'La' },
      { pregunta: 'Completa la frase: Yo ___ al cine.', opciones: ['va', 'vas', 'voy', 'vamos'], respuestaCorrecta: 'voy' },
    ],
    intermedio: [
      { pregunta: 'Completa con el pretérito correcto: Ayer ___ a la tienda.', opciones: ['fui', 'vas', 'va', 'iré'], respuestaCorrecta: 'fui' },
      { pregunta: 'Selecciona la palabra que completa esta oración: Ellos no ___ terminado.', opciones: ['han', 'he', 'has', 'ha'], respuestaCorrecta: 'han' },
    ],
    avanzado: [
      { pregunta: 'Usa el subjuntivo correctamente: Espero que tú ___ (hacer) la tarea.', opciones: ['hacías', 'hagas', 'haces', 'hiciste'], respuestaCorrecta: 'hagas' },
      { pregunta: 'Completa con la forma correcta del verbo: Si yo ___ (poder), te ayudaría.', opciones: ['puedo', 'pudiera', 'podía', 'puede'], respuestaCorrecta: 'pudiera' },
    ],
  };

  const ejerciciosNivel = ejercicios[nivel as keyof typeof ejercicios] || [];

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Ejercicios de Gramática - Nivel {nivel ? nivel.charAt(0).toUpperCase() + nivel.slice(1) : ''}
        </h1>

        {ejerciciosNivel.length > 0 ? (
          <div className="space-y-6">
            {ejerciciosNivel.map((ejercicio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4 text-xl font-medium">{ejercicio.pregunta}</p>
                <ul className="space-y-2">
                  {ejercicio.opciones.map((opcion, idx) => (
                    <li key={idx}>
                      <label className="inline-flex items-center">
                        <input type="radio" name={`pregunta-${index}`} className="form-radio text-blue-600" />
                        <span className="ml-2">{opcion}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No hay ejercicios disponibles para este nivel.</p>
        )}
      </div>
    </Layout>
  );
};

export default Gramatica;
