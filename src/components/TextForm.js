import React, { useState } from 'react';

function TextForm(props) {
  const [text, setText] = useState('');

  const upHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };

  const clear = () => {
    setText('');
    props.showAlert("Text Deleted","success");
  };

  const lowHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container' style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className='form-control'
            value={text}  // Ensure value is controlled by the state
            onChange={handleOnChange}
            id='myBox'
            rows={8}
            cols={4}
            style={{backgroundColor: props.mode==='dark' ? 'grey':'white',color: props.mode==='dark' ? 'white':'black'}}
          ></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={upHandler}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary mx-2' onClick={lowHandler}>
          Convert to Lowercase
        </button>
        <button className='btn btn-primary mx-2' onClick={clear}>
          Delete the text
        </button>
      </div>
      <div className='container my-3 ' style={{color: props.mode==='dark' ? 'white':'#042743'}}>
        <h1>Your summary</h1>
        <p>{text.split(' ').length - 1} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes needed</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
