import React, {Component} from "react";

class MapComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {  // width, height of the map
      width: 600,
      height: 300,
      userX: props.userX,  // We'll need the x and y of the user to put the map
      userY: props.userY
        };
    }

    updateMap () {

    }
    render() {
       return (<div></div>)
    }
}

export default MapComponent;