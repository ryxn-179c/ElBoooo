// src/App.js
import React, { useState } from 'react';
import AutorForm from './components/AutorForm';
import ListaAutores from './components/ListaAutores';
import AutorBuscar from './components/AutorBuscar'; // ✅ Nuevo componente de búsqueda
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('crear');

  const tabs = [
    { id: 'crear', label: 'Crear Autor' },
    { id: 'listar', label: 'Lista de Autores' },
    { id: 'buscar', label: 'Buscar Autor' } // ✅ Actualizado
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>✍️ Gestión de Autores</h1>
        <p>Sistema para administrar los autores de la biblioteca</p>
      </header>

      <nav className="tabs-container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="content-container">
        {activeTab === 'crear' && <AutorForm />}
        {activeTab === 'listar' && <ListaAutores />}
        {activeTab === 'buscar' && <AutorBuscar />} {/* ✅ Reemplazado */}
      </main>

      <footer className="app-footer">
        <p>© 2025 Sistema de Gestión de Autores | Desarrollado con React</p>
      </footer>
    </div>
  );
}

export default App;
