import { AiFillCheckCircle } from "react-icons/ai";
import "./todoItem.styles.css";
import { TodoCard } from "./todoItem.style";

export interface iTodoItemProps {
  title: string;
  isComplete: boolean;
  setTodos?: React.Dispatch<React.SetStateAction<iTodoItemProps[]>>;
  index?: number;
}

const TodoItem = ({ title, isComplete, index, setTodos }: iTodoItemProps) => {
  const handleCompleteTodo = (index: number) => {
    const todosStorage = localStorage.getItem("todo");

    if (!todosStorage) return null;

    const todosCopy: iTodoItemProps[] = JSON.parse(todosStorage);

    const newTodos = todosCopy.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos && setTodos(newTodos);
    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  return (
    <TodoCard isComplete={isComplete}>
      <span>{title}</span>
      <button onClick={() => handleCompleteTodo(index as number)}>
        <AiFillCheckCircle />
      </button>
    </TodoCard>
  );
};

export default TodoItem;
