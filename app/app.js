//React libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Import Container component
import HelloContainer from './containers/hello.container'

class App extends React.Component {
  render () {
    return (
      <HelloContainer />
    );
  }
}

// Render to index.html
ReactDOM.render(
  <App />,
  document.getElementById('content')
);
