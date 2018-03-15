import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
      My Projects {this.props.hello}
      </div>
    );
  }
}

let jsonResult = this.state.rockets;
return (
<div>
  {jsonResult.map(item =>
    <h4 key={item.id}>{item.diameter.meters}</h4>
  )}
</div>
);

export default Projects;
