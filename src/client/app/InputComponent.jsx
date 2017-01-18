import index from '../public/index.css';
import React from 'react';

class InputComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {word: 'Enter your word'};
  }

  changeText(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <div className={index.inputWordDiv}>
          <input className={index.inputWordText} type='text' value={this.state.word} onChange={this.changeText} name='word'></input>
        </div>
        <div className={index.inputSubmitDiv}>
          <input className={index.inputSubmitDiv} type='submit' value='Submit'/>
        </div>
      </div>
    );
  }
}

export default InputComponent;
