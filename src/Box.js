import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteBox(this.props.id);
  }

  render() {
    return (
      <div>
        <div className="Box"
          style={{
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: this.props.color
          }}
        >
          <button className="Box-btn" onClick={this.handleClick}>X</button>
        </div>
        
      </div>
    );
  }
}

export default Box;