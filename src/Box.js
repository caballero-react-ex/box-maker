import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
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
          <button className="Box-btn">X</button>
        </div>
        
      </div>
    );
  }
}

export default Box;