import styles from '../public/index.css';
import React from 'react';

class InputComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='input-comp'>
        <h1 class='${styles.title}'>
          Type in a word
        </h1>
        <div class='input-input'>
          <input class='input-input-text' type='text' value='hello' name='word'/>
          <input class='input-input-submit' type='submit' value='submit'/>
        </div>
      </div>
    );
  }
}

export default InputComponent;
