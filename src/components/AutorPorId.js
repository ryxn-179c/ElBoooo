import React, { useState } from 'react';
import { obtenerAutorPorId } from '../api/api';

const AutorPorId = () => {
  const [id, setId] = useState('');
  const [autor, setAutor] = useState(null);
  const [error, setError] = useState('');

  const buscarAutor = async () => {
    try {
      const response = await obtenerAutorPorId(id);
      setAutor(response.data);
      setError('');
    } catch (err) {
      setError('No se encontró el autor.');
      setAutor(null);
    }
  };

  return (
    <div className="buscar-container">
      <h2>Buscar autor por ID</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Ingrese GUID del autor"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={buscarAutor}>Buscar</button>
      </div>

      {error && <div className="error-container">{error}</div>}

      {autor && (
        <div className="libro-detalle">
          <div className="detail-header">
            <h3>{autor.nombre} {autor.apellido}</h3>
            <span className="book-id">{autor.autorLibroGuid}</span>
          </div>
          <div className="detail-info">
            <p><strong>Fecha de nacimiento:</strong> {new Date(autor.fechaNacimiento).toLocaleDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutorPorId;