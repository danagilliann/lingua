import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import InputComponent from './InputComponent.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello!</p>
        <InputComponent/>
        {/*<AwesomeComponent/>*/}
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
