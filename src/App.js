import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  // Função para remover uma tarefa pelo índice
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Digite uma nova tarefa"
          />
          <button onClick={addTask}>Adicionar</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
