
import axios from 'axios';
import { useEffect } from 'react';

export function api() {

    useEffect(() => {
        axios.get('http://localhost:3333/ping') // Substitua pela URL da sua API e pela rota desejada
            .then(response => {
                console.log(response.data); // Faça algo com os dados recebidos, como armazená-los no estado do componente
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []); // Certifique-se de gerenciar corretamente as dependências do useEffect
}
