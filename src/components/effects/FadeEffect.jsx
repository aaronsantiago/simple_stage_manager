import React from "react";
import Fade from "../../utils/Fade";
import ReactGun from "../base/ReactGun";
import Panel from "../base/Panel";
import { Button } from "@chakra-ui/button";

class FadeEffect extends React.Component {
  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }
  
  componentDidMount(){
    let panel = window.currentActivePanels[this.props.data.key];
    if (panel) {
      panel.setState({active: true});
    }
  }
  componentWillUnmount(){
    let panel = window.currentActivePanels[this.props.data.key];
    if (panel) {
      panel.setState({active: false});
    }
  }

  stop() {
    Fade.stopEffect(this.props.gun);
  }

  render() {
    return (
      <Panel bg="green.100" heading={this.props.data.title} pb="10">
        <Button
          position="absolute"
          bottom="0"
          variant="outline"
          w="100%"
          borderRadius="0"
          onClick={this.stop}
        >
          Deactivate
        </Button>
      </Panel>
    );
  }
}

export default FadeEffect;
