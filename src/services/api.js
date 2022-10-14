import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:7000',
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
    return api.post('/bancodesangue/create', {
        nome,
        endereco,
        telefone,
        email,
        tipoSanguineo,
        senha,
    });
};
