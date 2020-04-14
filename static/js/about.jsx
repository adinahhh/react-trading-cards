"use strict";

class About extends React.Component {
  render() {
    return (
      <div>
        <h3>About page for my react app!</h3>
        <img src="/static/img/balloonicorn.jpg"/>
        <br/>
        
        <a href="/" target="_blank">Go back to homepage</a>
      </div>
    );
  }
}

ReactDOM.render(<About />, document.getElementById('#about'));