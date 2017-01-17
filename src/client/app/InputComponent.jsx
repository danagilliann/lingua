import index from '../public/index.css';
import React from 'react';

class InputComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className={index.red}>
          Type in a word
        </h1>
        <div>
          <input type='text' value='hello' name='word'/>
          <input type='submit' value='submit'/>
        </div>
      </div>
    );
  }
}

export default InputComponent;
