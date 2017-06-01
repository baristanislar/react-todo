import React, { Component } from 'react';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';
import _ from 'lodash';

export default class TodoList extends React.Component{

    renderItems=()=>{
        const props=_.omit(this.props, 'todos');
        return this.props.todos.map((todo,index)=><TodoListItem key={index}{...todo} {...props}/>) ;
    }
    render() {
        return(
            <table>
                <TodoListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
