"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome to my react app!</h3>
        <img src="/static/img/balloonicorn.jpg"/>
        <br/>
        
        <a href="/cards" target="_blank">See Cards</a>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
