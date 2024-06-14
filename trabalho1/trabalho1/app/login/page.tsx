"use client"; 

import { useContext, useState, useCallback } from 'react';
import { AuthContext } from '../../context/AuthContext'; 
import { useRouter } from 'next/navigation'; 

const Login: React.FC = () => {
    const { login, authError } = useContext(AuthContext);
    const router = useRouter();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState<string | null>(null);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCredentials(prev => ({ ...prev, [id]: value }));
    }, []);

    const handleLogin = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            await login(credentials);
            router.push('/');  // Redireciona para a página inicial após login bem-sucedido
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Erro ao fazer login.');
        }
    }, [credentials, login, router]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col p-4 border rounded">
                <label htmlFor="username" className="mb-2">Usuário:</label>
                <input
                    type="text"
                    id="username"
                    value={credentials.username}
                    onChange={handleChange}
                    className="p-2 mb-2 border rounded"
                    required
                />
                <label htmlFor="password" className="mb-2">Senha:</label>
                <input
                    type="password"
                    id="password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="p-2 mb-2 border rounded"
                    required
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">Acessar</button>
            </form>
            {authError && <p className="mt-4 text-red-500">{authError}</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
    );
};

export default Login;
