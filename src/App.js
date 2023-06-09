
import { Routes, Route } from "react-router-dom";
import TodoList from './components/TodoList/TodoList';
import ContactForm from './components/ContactForm/ContactForm';
import { BrowserRouter } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div> 
      <a href='/counter' style={{margin: 20}}>Counter</a>
      <a href='/todo' style={{margin: 20}}>Todo List</a>
      <a href='/contact' style={{margin: 20}}>Conatct Form</a>
      </div>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="contact" element={<ContactForm></ContactForm>} />
          <Route path="todo" element={<TodoList></TodoList>} />
          <Route path="counter" element={<Counter></Counter>} />
          <Route path="" element={<TodoList></TodoList>} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
