export function request<TResponse>(
    url: string,
    config: RequestInit = {}
): Promise<TResponse> {
    return fetch(url, config)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
            return response.json() as Promise<TResponse>;
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            throw error; // Re-lança o erro para ser capturado pela chamada de request()
        });
}
