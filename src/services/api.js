import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export const getVeiculos = async () => {
    try {
        const response = await api.get('/veiculos');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getVeiculoPorId = async (id) => {
    try {
        const response = await api.get(`/veiculos/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const postVeiculo = async (veiculo) => {
    try {
        const response = await api.post('/veiculos', veiculo);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const putVeiculo = async (id, veiculo) => {
    try {
        const response = await api.put(`/veiculos/${id}`, veiculo);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteVeiculo = async (id) => {
    try {
        const response = await api.delete(`/veiculos/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}