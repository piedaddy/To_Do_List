import React from 'react';
import { Todo } from '../ToDo/ToDo.jsx';
import './item.css';




export class Item extends React.Component {
  state = {
    task1:"take out trash",
    task2:"take out LjubyenTakeyourgf "
  }

  render () {
    return (
      <>
      <Todo /> 
      <div class = 'task'>
        <h3>{this.state.task1}</h3>
      </div>
      <Todo /> 
      <div class = 'task'>
        <h3>{this.state.task2}</h3>
      </div>
      <Todo /> 
      <div class = 'task'>
        <h3>go run</h3>
      </div>
    </>
    )
  }
}

