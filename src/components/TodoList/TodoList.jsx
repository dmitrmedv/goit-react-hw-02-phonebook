import { Item } from './TodoList.styled';

export default function TodoList({ text, id, removeTodo, status }) {
  return (
    <>
      <Item status={status}>
        <p>{text}</p>
        <button type="button" onClick={() => removeTodo(id, status)}>
          x
        </button>
      </Item>
    </>
  );
}
