import React, { Component } from 'react';
import './App.css'

class TwoWayBindingComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with an empty string
    this.state = { inputValue: '' };
  }

  // Event handler for the input change
  handleInputChange = (e) => {
    this.setState(
      {
        inputValue: e.target.value
      }
      );
  }

  render() {
    return (
        <div className='a'>
        <h1>Example of Two-way Data-Binding using class Component</h1>
      <div className='TwoApp'>
        <textarea rows={10} cols={50} className='c'
        value={this.state.inputValue} // The textarea is controlled by the state
        onChange={this.handleInputChange} // Update the state on input change
        />
        <p className='b'>Current Value: {this.state.inputValue}</p> {/* Displaying the current value */}
      </div>
      </div>
    );
  }
}

export default TwoWayBindingComponent;
