import React, { useState } from 'react';
import { crearAutor } from '../api/api';

const AutorForm = () => {
  const [autor, setAutor] = useState({ nombre: '', apellido: '', fechaNacimiento: '' });
  const [mensaje, setMensaje] = useState('');

  const handleChange = e => {
    setAutor({ ...autor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await crearAutor(autor);
      setMensaje('✅ Autor creado exitosamente');
      setAutor({ nombre: '', apellido: '', fechaNacimiento: '' });
    } catch (error) {
      setMensaje('❌ Error al crear el autor');
    }
  };

  return (
    <div className="form-container">
      <h2>Crear nuevo autor</h2>
      {mensaje && <p className="success-message">{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="nombre" value={autor.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input type="text" name="apellido" value={autor.apellido} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Fecha de nacimiento</label>
          <input type="date" name="fechaNacimiento" value={autor.fechaNacimiento} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">Guardar Autor</button>
      </form>
    </div>
  );
};

export default AutorForm;