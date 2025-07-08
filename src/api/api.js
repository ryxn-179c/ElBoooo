// src/api/api.js
import axios from 'axios';

const API_BASE_URL = 'https://microservicioautores.somee.com/api';

export const crearAutor = async (autor) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Autor`, autor);
    return response.data;
  } catch (error) {
    console.error('❌ Error en crearAutor:', error.response || error.message);
    throw error;
  }
};

export const obtenerAutores = () => axios.get(`${API_BASE_URL}/Autor`);
export const obtenerAutorPorId = (id) => axios.get(`${API_BASE_URL}/Autor/${id}`);

export const buscarAutores = async (valor) => {
  const response = await axios.get(`${API_BASE_URL}/Autor/buscar?valor=${valor}`);
  return response.data;
};
