import React, { Component } from "react";
import './NewBoxForm.css';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {height: "", width: "", color: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form className="NewBoxForm">
        <div className="input-container">
          <label htmlFor="height">Height:</label>
          <input 
            className="NewBoxForm-input"
            type="text" 
            name="height"
            value={this.state.height}
            id="height"
            onChange={this.handleChange}
          /><span>px</span>
        </div>
        <div className="input-container">
          <label htmlFor="width">Width:</label>
          <input 
            className="NewBoxForm-input"
            type="text" 
            name="width"
            value={this.state.width}
            id="width"
            onChange={this.handleChange}
          /><span>px</span>
        </div>
        <div className="input-container">
          <label htmlFor="color">Color:</label>
          <input 
            className="NewBoxForm-input"
            type="text" 
            name="color"
            value={this.state.color}
            id="color"
            onChange={this.handleChange}
          />
        </div>
        <button>Create Box</button>
      </form>
    )
  }
}

export default NewBoxForm;