import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './BoxList.css';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: []};
    this.create = this.create.bind(this);
  }

  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    });
  }

  render(){
    const boxes = this.state.boxes.map(box => (
      <Box 
      height={box.height} 
      width={box.width} 
      color={box.color} 
      />
    ));

    return(
      <div>
        <h2 className="BoxList-title">Color Box Maker</h2>
        <NewBoxForm createBox={this.create} />
        <div className="BoxList-container">
          {boxes}
        </div>
      </div>
    );
  }
}

export default BoxList;