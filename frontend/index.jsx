import React from 'react';
import ReactDOM from 'react-dom';
import { Item } from './ToDo_Item/item.jsx';

import './index.css';
import './index.html';


export class App extends React.Component {
  render() {
    return (
      <Item /> 
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#app'));
