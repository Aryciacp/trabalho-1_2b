import { parseCookies } from 'nookies';

async function fetchData() {
    try {
        const { 'auth.token': token } = parseCookies();

        if (!token) {
            throw new Error('Token não encontrado. Por favor, faça login.');
        }

        const response = await fetch('http://localhost:3000/products', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            referrerPolicy: 'no-referrer',
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error; // Re-lança o erro para ser capturado pela chamada de fetchData()
    }
}

fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
