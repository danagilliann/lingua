import index from '../public/index.css';
import React from 'react';
import {render} from 'react-dom';
import InputComponent from './InputComponent.jsx';

class App extends React.Component {
  render() {
    return (
      <div className={index.app}>
        <InputComponent/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
