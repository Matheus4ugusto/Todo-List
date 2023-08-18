import { AiFillCheckCircle } from "react-icons/ai";
import "./todoItem.styles.css";

export interface iTodoItemProps {
  title: string;
  isComplete: boolean;
  handleCompleteTodo?: (index: number) => void;
  index?: number;
}

const TodoItem = ({ title, isComplete, handleCompleteTodo, index }: iTodoItemProps) => {
  return (
    <li>
      <span>{title}</span>
      <button onClick={() => handleCompleteTodo && handleCompleteTodo(index as number)}>
        <AiFillCheckCircle color={isComplete ? "#01fe0b" : " #000 "} />
      </button>
    </li>
  );
};

export default TodoItem;
