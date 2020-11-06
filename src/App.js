import React from 'react';
import './App.css';
import TodoList from "./app/Containers/TodoList/TodoList";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        To Do List
      </header>
      <section>
        <TodoList />
      </section>
    </div>
  );
}



export default App;
