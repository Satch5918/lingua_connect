// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Lingua Connect</div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:underline">
            Inicio
          </Link>
          <Link href="/salas" className="text-white hover:underline">
            Salas
          </Link>
          <Link href="/ejercicios" className="text-white hover:underline">
            Ejercicios
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
