import { useState } from "react";
import "./todoList.style.css";
import TodoItem, {iTodoItemProps} from "../TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<iTodoItemProps[]>([
    { title: "lavar o carro", isComplete: true}
]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodoValue = (value: string) => setNewTodo(value);

  const handleAddTodo = () => {
    if(!newTodo) return null;
    const todoObj = {
        title: newTodo,
        isComplete: false,
    };
    setTodos([...todos, todoObj]);
    setNewTodo("");
};

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <section>
        <input
          onChange={(e) => handleAddTodoValue(e.target.value)}
          type="text"
          placeholder="Nova Tarefa"
          value={newTodo}
        />
        <button onClick={handleAddTodo}>Adiciona tarefa</button>
      </section>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} {...todo}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
