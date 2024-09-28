import React from 'react';
import { Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LinguaConnect</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-200">Inicio</a>
          <a href="#" className="hover:text-blue-200">Salas</a>
          <a href="#" className="hover:text-blue-200">Ejercicios</a>
          <a href="#" className="hover:text-blue-200">Recursos</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6 cursor-pointer" />
          <User className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;