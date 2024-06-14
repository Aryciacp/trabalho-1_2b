"use client";

import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">
        Olá, seja bem-vindo
      </h1>
      <h3 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">
        Explicação:
      </h3>
      <p className="text-center pb-10 sm:pb-24">
        Este é um exemplo de aplicação Next.js com navegação para a página de login.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button 
          onClick={handleLogin} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 active:scale-100"
        >
          Login
        </button>
      </div>
    </main>
  );
};

export default Home;

