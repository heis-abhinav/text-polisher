import React, {useState} from 'react'

export default function InputForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter Text');

  return (
      <>
    <div className='container' style = {{color: props.mode ==='dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textArea" rows={10} style = {{backgroundColor: props.mode ==='light'? 'white': 'grey', color: props.mode ==='dark'? 'white': 'black' }} ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick = {()=> handleUpClick()}>Convert UpperCase Text</button>
            <button className="btn btn-primary mx-2" onClick = {()=> handleLowerClick()}>Convert LowerCase Text</button>
        </div>
    </div>
    <div className="container my-2" style = {{color: props.mode ==='dark'? 'white': 'black'}}>
        <h1>Your Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} Minute read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text: "Enter something to preview"}</p>
    </div>
    </>
  )
}
