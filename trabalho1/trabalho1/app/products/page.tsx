"use client";

import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation'; // Importe correto para useRouter

const ProductsPage: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // Se o usuário não estiver autenticado, redireciona para a página de login
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    // Renderiza um placeholder ou nada enquanto redireciona
    return null;
  }

  return (
    <div>
      <h1>Produtos</h1>
      {/* Conteúdo da página de produtos */}
    </div>
  );
};

export default ProductsPage;
