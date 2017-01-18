import index from '../public/index.css';
import React from 'react';
import {render} from 'react-dom';
import InputComponent from './InputComponent.jsx';

class App extends React.Component {
  render() {
    return (
      <div className={index.app}>
        <h1 className={[index.h1, index.title].join(' ')}>
          Type in a word
        </h1>
        <InputComponent/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
