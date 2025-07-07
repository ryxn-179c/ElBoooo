// src/components/AutorBuscar.js
import React, { useState } from 'react';
import { buscarAutores } from '../api/api';

const AutorBuscar = () => {
  const [valor, setValor] = useState('');
  const [autores, setAutores] = useState([]);
  const [error, setError] = useState('');

  const buscar = async () => {
    try {
      const resultados = await buscarAutores(valor);
      if (resultados.length === 0) {
        setError('No se encontraron autores.');
        setAutores([]);
      } else {
        setAutores(resultados);
        setError('');
      }
    } catch (err) {
      console.error(err);
      setError('Ocurrió un error al buscar el autor.');
      setAutores([]);
    }
  };

  return (
    <div className="buscar-container">
      <h2>Buscar autor por ID, nombre o apellido</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Ingrese ID, nombre o apellido"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button onClick={buscar}>Buscar</button>
      </div>

      {error && <div className="error-container">{error}</div>}

      {autores.length > 0 && (
        <div className="libros-grid">
          {autores.map((autor) => (
            <div key={autor.autorLibroGuid} className="libro-card">
              <div className="card-header">
                <h3>{autor.nombre} {autor.apellido}</h3>
                <span className="book-id">{autor.autorLibroGuid}</span>
              </div>
              <div className="card-body">
                <p><strong>Fecha de nacimiento:</strong> {new Date(autor.fechaNacimiento).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutorBuscar;
