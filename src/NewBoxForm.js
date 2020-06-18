import React, { Component } from "react";
import './NewBoxForm.css';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {height: "", width: "", color: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let newBox = {...this.state, id: uuidv4()}
    this.props.createBox(newBox);
    this.setState({
      height: "",
      width:"",
      color:""
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form className="NewBoxForm" onSubmit={this.handleSubmit}>
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