import { AiFillCheckCircle } from "react-icons/ai";
import "./todoItem.styles.css"

export interface iTodoItemProps {
  title: string;
  isComplete: boolean;
}

const TodoItem = ({ title, isComplete }: iTodoItemProps) => {
  return (
    <li>
      <span>{title}</span>
      <div>
        <AiFillCheckCircle color={isComplete ? "#01fe0b" : " #000 "} />
      </div>
    </li>
  );
};

export default TodoItem;