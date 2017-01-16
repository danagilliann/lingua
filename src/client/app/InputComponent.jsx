import React from 'react';

class InputComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          Type in a word
        </div>
        <div>
          <input type="text" value="hello" name="word"/>
          <input type='submit' value="submit"/>
        </div>
      </div>
    );
  }
}

export default InputComponent;
