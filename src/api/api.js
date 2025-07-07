// src/api/api.js
import axios from 'axios';

const API_BASE_URL = 'https://elbooo.somee.com/api';

export const crearAutor = (autor) => axios.post(`${API_BASE_URL}/Autor`, autor);
export const obtenerAutores = () => axios.get(`${API_BASE_URL}/Autor`);
export const obtenerAutorPorId = (id) => axios.get(`${API_BASE_URL}/Autor/${id}`);

// ✅ Buscar por valor único (nombre, apellido o ID)
export const buscarAutores = async (valor) => {
  const response = await axios.get(`${API_BASE_URL}/Autor/buscar?valor=${valor}`);
  return response.data;
};
