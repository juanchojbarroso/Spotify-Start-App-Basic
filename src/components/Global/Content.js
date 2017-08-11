//Dependecies
import React, { Component } from 'react';

//Asserts
import './css/Content.css';

class Content extends Component {
  constructor(){
    super(); 

    this.state = {
      count:0,
      number1:0,
      number2:0
    };

   this.handleCountClick = this.handleCountClick.bind(this);
   this.handleResultClick = this.handleResultClick.bind(this);
   this.handleInputChange = this.handleInputChange.bind(this);
   
  }
  componentDidMount(){
     this.setState({
       count:1
      });
  }
  
  handleCountClick(e){
      if (e.target.id === 'add'){
        this.setState({
          count: this.state.count + 1
        })
     }else if (e.target.id === 'substract' && this.state.count > 0){
        this.setState({
          count: this.state.count - 1
        })
     }else{
       this.setState({
         count: 0
       })
     }
  }

  handleResultClick(e){

    this.state.number1 + this.state.number2 
  }

  handleInputChange(e){

  }
  

  render() {
    console.log(this.state.count)
    console.log("Render React 1")
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>
        <p>
          <button id="add" onClick ={this.handleCountClick}>+</button>
          <button id="substract" onClick ={this.handleCountClick}>-</button>
          <button id="reset" onClick ={this.handleCountClick}>reset</button>
        </p>

        <h2>Calculator</h2>
        <p>
          <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChange}/>
          +
          <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChange}/>
          
          <button id="result" onClick ={this.handleResultClick}>=</button>
        </p>
      </div>
    );
  }
}

export default Content;
