import React, { Component } from 'react';

export default class Todo extends React.Component{
    render(){
        return(
          <div>
              <input type="text" placeholder="Bu gün ne yapıcaksın ?" ref={"createInput"}/>
              <button onClick={this.handleCreate}>Olustur</button>
          </div>
        );
    }
    handleCreate=()=>{
        event.preventDefault();
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value='';
    }
}