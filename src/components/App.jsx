// import data from './Data/colors.json';
// import ColorPiker from './ColorPiker';
import { Component } from 'react';
import todoData from './Data/data.json';
import TodoList from './TodoList';
import { List } from './TodoList/TodoList.styled';

export class App extends Component {
  // return <ColorPiker data={data} />;
  state = {
    data: todoData,
  };

  removeTodo = (id, status) => {
    this.setState(prevState => {
      const a = prevState.data.find(item => item.id === id);
      a.status = !status;

      return {
        data: prevState.data.sort((a, b) => a.status - b.status),
      };
    });
  };

  render() {
    return (
      <List>
        {this.state.data.map(({ text, id, status }) => {
          return (
            <TodoList
              key={id}
              text={text}
              id={id}
              status={status}
              removeTodo={this.removeTodo}
            ></TodoList>
          );
        })}
      </List>
    );
  }
}
