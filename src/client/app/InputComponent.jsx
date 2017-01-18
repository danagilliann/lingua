import index from '../public/index.css';
import React from 'react';

class InputComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1 className={[index.h1, index.title].join(' ')}>
          Type in a word
        </h1>
        <div>
          <div className={index.inputWordDiv}>
            <input className={index.inputWordText} type='text' value='Enter your word' name='word'></input>
          </div>
          <div className={index.inputSubmitDiv}>
            <input className={index.inputSubmitDiv} type='submit' value='submit'/>
          </div>
        </div>
      </div>
    );
  }
}

export default InputComponent;
