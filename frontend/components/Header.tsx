import React from 'react';
import { Bell, User, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-blue-600 dark:bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LinguaConnect</h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="/home" className="hover:text-blue-200">Inicio</Link>
          <Link href="/salas" className="hover:text-blue-200">Salas</Link>
          <Link href="/ejercicios" className="hover:text-blue-200">Ejercicios</Link>
          <Link href="/recursos" className="hover:text-blue-200">Recursos</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6 cursor-pointer" />
          <User className="h-6 w-6 cursor-pointer" />
          {/* Botón para alternar entre dark y light mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
