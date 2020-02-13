import React from 'react';
import './todo.css';


export class Todo extends React.Component{

state = {
  symbol:"question"
}

handleClick = () => {
  if (this.state.symbol === "question"){
    this.setState({
      symbol: "check"
    })
  } else if (this.state.symbol === "check"){
    this.setState({
      symbol: "cross"
    })
  } else if (this.state.symbol === "cross"){
    this.setState({
      symbol: "question"
    })
  }
}
  render() {

    return ( 
      <>
      <div className = {`image image-${this.state.symbol}`} onClick = {this.handleClick}></div>
      </>
    )
  }
}
