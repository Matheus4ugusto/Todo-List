import { styled } from "styled-components";

export const TodoCard = styled.li<{ isComplete: boolean }>`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 1rem;
  background-color: #d8d8d8;
  border-radius: 6px;
  margin-bottom: 1rem;

  &:hover {
    background-color: #f7f7f7;
  }

  button {
    color: ${(props) => (props.isComplete ? "#00ff30" : "#000")};
    background-color: transparent;
  }
`;
