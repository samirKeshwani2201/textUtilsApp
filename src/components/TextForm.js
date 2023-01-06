import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")



    }

    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();

        navigator.clipboard.writeText( text);
        // document.getSelection().removeAllRanges();

        props.showAlert("Text copied to clipboard", "success")


    }
    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed", "success")

    }
    const handleCamelClick = () => {
        // let newText=
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";

        }


        const newText = arr.join("");
        setText(newText);
        props.showAlert("Converted to camelcase", "success")

    }
    const handleRedClick = () => {

        let tArea = document.querySelector('#myBox');
        tArea.style.backgroundColor = "red";
        props.showAlert("Converted text area to  red color ", "success")
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text cleared ", "success")
    }
    const [text, setText] = useState(' ');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? ' #042743' : 'white' }} >
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    {/* Style we wrote 2 curly brackets bcoz one is for using js and other for using object  */}
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'light' ? ' #042743' : 'white' }} value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
                </div> 
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCamelClick}>Convert to Camelcase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove extraspaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleRedClick}>Convert textarea to red color</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? ' #042743' : 'white' }}>
                <h2>Your text summary</h2>
                {/* text.split(" ") will give us the array of words and the length of the array will give us required length */}
                {/* Filter jis ele ke liye true return karega vo rahega aur flase vala array me nahi rahe ga  */}
                {/* We want to split it by a space or by a new line  so in \s it include newline as well as space and + we wrote because one or more white spaces than also split  */}
                <p>{text.split(/\s +/).filter((element) => {
                    return element.length !== 0;

                }).length} words and {text.length} characters</p>
                <p >{0.008 * text.split(" ").filter((element) => {
                    return element.length !== 0;

                }).length} Minutes to read </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>

    )
}
