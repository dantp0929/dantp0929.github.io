import React from "react";

class Snippet extends React.Component {
  render() {
    return (
      <>
        <img src={require(this.props.imagePath)} alt={this.props.imageAlt} height={180}></img> 
        {this.props.details}
      </>
    ) 
  }
}


export default Snippet;