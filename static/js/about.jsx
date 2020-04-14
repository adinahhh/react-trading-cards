"use strict";

class About extends React.Component {
  render() {
    return (
      <div>
        <h5>Look at how cute Balloonicorn is:</h5>
        <img src="/static/img/balloonicorn.jpg"/>
        <br/>
        
        <a href="/">Go back to homepage</a>
      </div>
    );
  }
}

ReactDOM.render(<About />, document.getElementById('about'));