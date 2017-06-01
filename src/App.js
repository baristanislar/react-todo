import React, {Component} from 'react';
import './App.css';
import TodoList from "./TodoList";
import Todo from "./Todo";
import _ from 'lodash';


const todos = [{
    task: 'react tutorial',
    isCompleted: false
},
    {
        task: 'kahvaltı yapmak',
        isCompleted: true
    }
];
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [{
                task: 'react tutorial',
                isCompleted: false
            },
                {
                    task: 'kahvaltı yapmak',
                    isCompleted: true
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>react yapılıcaklar listesi</h1>
                <Todo createTask={this.createTask}/>
                <TodoList todos={this.state.todos}
                          toggleTask={this.toggleTask.bind(this)}
                          saveTask={this.saveTask.bind(this)}
                          deleteTask={this.deleteTask.bind(this)}
                />

            </div>
        );
    }

    toggleTask=(task)=>{
        const foundTodo=_.find(this.state.todos,todo=> todo.task===task);
        foundTodo.isCompleted=!foundTodo.isCompleted;
          this.setState({todos: this.state.todos});
    }

    createTask = (task) => {
        let todos = this.state.todos.slice(0);
        todos.push({
            task,
            isCompleted: false
        });
        this.setState({todos: todos});

    }

    saveTask=(oldTask,newTask)=> {
        const foundTodo=_.find(this.state.todos,todo=> todo.task===oldTask);
          foundTodo.task=newTask;
          this.setState({todos:this.state.todos});

    }

    deleteTask(taskToDelete){
        _.remove(this.state.todos, todo=>todo.task===taskToDelete);
        this.setState({todos: this.state.todos});
    }
}
