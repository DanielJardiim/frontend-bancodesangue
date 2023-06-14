import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

// USERS
export const createUsers = async (
    nome,
    endereco,
    telefone,
    email,
    tipoSanguineo,
    senha
) => {
    return api.post('/doadores', {
        nome,
        endereco,
        telefone,        
        tipoSanguineo        
    });
};
