import React from 'react';
import _ from 'lodash';

import TodoListHeader from './todos-list-headers';
import TodoListItem from './todos-list-item';


export default class TodoList extends React.Component{
  renderItems(){
    const props = _.omit(this.props, 'todos');
    
    return _.map(this.props.todos, (todos, index) =>
      <TodoListItem key={index} {...todos} {...props}/>
    )
  }
  render(){
    return (
      <div>
      <table>
        <TodoListHeader />
        <tbody>
        {this.renderItems()}
        </tbody>
      </table>
      </div>
    );
  }
}
