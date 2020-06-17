import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './BoxList.css';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [
      {height:100, width:100, color:"orange" }, 
      {height:150, width:200, color:"purple" },
      {height:200, width:220, color:"pink" },
    ]};
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
        <NewBoxForm />
        <div className="BoxList-container">
          {boxes}
        </div>
      </div>
    );
  }
}

export default BoxList;