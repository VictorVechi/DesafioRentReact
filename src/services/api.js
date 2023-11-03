import axios from "axios";

// Adiciona a url utilizada para fazer as requisições
const api = axios.create({
    baseURL: 'http://localhost:3000'
});

// Exporta as funções que serão utilizadas para fazer as requisições

// Requisição de todos os veículos
export const getVeiculos = async () => {
    try {
        const response = await api.get('/veiculos');
        return response.data;
    } catch (error) {
        return []
    }
}

// Requisição de um veículo específico
export const getVeiculoPorId = async (id) => {
    try {
        const response = await api.get(`/veiculos/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Criação de um veículo
export const postVeiculo = async (veiculo) => {
    try {
        const response = await api.post('/veiculos', veiculo);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Atualização de um veículo
export const putVeiculo = async (id, veiculo) => {
    try {
        const response = await api.put(`/veiculos/${id}`, veiculo);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Deleção de um veículo
export const deleteVeiculo = async (id) => {
    try {
        const response = await api.delete(`/veiculos/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}