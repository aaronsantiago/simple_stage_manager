import React from "react";

class IFrame extends React.Component {
  render() {
    return (
      <iframe style={{zIndex: this.props.hidden ? -10000: 0, height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0, pointerEvents: this.props.pointerEvents}} {...this.props}/>
    );
  }
}

export default IFrame;
