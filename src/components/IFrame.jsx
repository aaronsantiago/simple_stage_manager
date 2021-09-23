import React from "react";

class IFrame extends React.Component {
  render() {
    return (
      <iframe style={{zIndex: this.props.hidden ? -10000: 0, height: "100%", width: "100%", position: "absolute", pointerEvents: this.props.pointerEvents}} {...this.props}/>
    );
  }
}

export default IFrame;
