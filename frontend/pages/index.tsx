import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Asegúrate de importar useRouter correctamente

interface SocialButtonProps {
  provider: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  border?: boolean;
}

const SocialButton: React.FC<SocialButtonProps> = ({ provider, icon, bgColor, textColor, border }) => (
  <button className={`w-full flex items-center justify-center px-4 py-2 rounded-md ${bgColor} ${textColor} text-sm font-medium hover:opacity-90 transition-opacity ${border ? 'border border-gray-300' : ''}`}>
    {icon}
    <span className="ml-2">Continue with {provider}</span>
  </button>
);

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Asegúrate de que useRouter esté bien

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto
    console.log('Form submitted'); // Verifica que este mensaje se muestre en la consola
    router.push('/home'); // Redirige a la página principal
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl text-black font-bold text-center mb-6">Sign in</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4"> {/* Asegúrate de que esto esté bien */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  // Maneja el estado del email
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  // Maneja el estado del password
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="absolute right-3 top-2 text-gray-400">👁</span>
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgotten your password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>OR</p>
        </div>
        
        <div className="mt-4 space-y-3">
          <SocialButton 
            provider="Facebook"
            bgColor="bg-[#1877F2]"
            textColor="text-white"
            icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" /></svg>}
          />
          
          <SocialButton 
            provider="Google"
            bgColor="bg-white"
            textColor="text-gray-700"
            border={true}
            icon={<svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" /><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" /><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" /><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" /></svg>}
          />
          
          <SocialButton 
            provider="Apple"
            bgColor="bg-black"
            textColor="text-white"
            icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.569 12.6254C17.597 15.652 20.2179 16.6592 20.247 16.672C20.2248 16.743 19.8282 18.1073 18.8662 19.5166C18.0345 20.7324 17.1714 21.9394 15.8117 21.9647C14.4828 21.9887 14.0473 21.1793 12.5252 21.1793C10.9911 21.1793 10.5243 21.9407 9.2636 21.9887C7.94819 22.0354 6.91203 20.6437 6.07264 19.4345C4.36014 16.9677 3.0478 12.4802 4.79698 9.39061C5.6646 7.85041 7.27885 6.8667 9.03666 6.84272C10.3147 6.81873 11.5236 7.70931 12.3315 7.70931C13.1308 7.70931 14.5651 6.6392 16.1048 6.81271C16.7989 6.84004 18.4659 7.09671 19.5323 8.81571C19.4431 8.86957 17.5461 10.0614 17.569 12.6254ZM15.0183 5.0332C15.714 4.18334 16.1824 2.9881 16.0557 1.79999C15.0102 1.84652 13.7312 2.47245 13.0122 3.30832C12.3686 4.05542 11.8109 5.28349 11.9604 6.43921C13.1252 6.53784 14.3071 5.87572 15.0183 5.0332Z" /></svg>}
          />
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <a href="#" className="mt-2 inline-block text-blue-600 hover:underline">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
