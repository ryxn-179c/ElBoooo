import React, { useEffect, useState } from 'react';
import { obtenerAutores } from '../api/api';

const ListaAutores = () => {
  const [autores, setAutores] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchAutores = async () => {
      try {
        const response = await obtenerAutores();
        setAutores(response.data);
      } catch (error) {
        console.error('Error al obtener autores', error);
      } finally {
        setCargando(false);
      }
    };
    fetchAutores();
  }, []);

  return (
    <div className="libros-container">
      <h2>Lista de autores</h2>
      {cargando ? (
        <div className="loading-container"><div className="spinner"></div></div>
      ) : autores.length === 0 ? (
        <p className="empty-state">No hay autores registrados.</p>
      ) : (
        <div className="libros-grid">
          {autores.map(autor => (
            <div key={autor.autorLibroGuid} className="libro-card">
              <div className="card-header">
                <h3>{autor.nombre} {autor.apellido}</h3>
                <span className="book-id">{autor.autorLibroGuid}</span>
              </div>
              <div className="card-body">
                <p><strong>Fecha Nacimiento:</strong> {new Date(autor.fechaNacimiento).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaAutores;