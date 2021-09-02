import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log("Uppercase clicked "+ text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase","success")
    }

    const handleLowClick = () =>{
        console.log("lowerCase clicked "+ text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LoweCase","success")
    }

    const handleClearClick = () =>{
        console.log("ClearText clicked "+ text)
        let newText = '';
        setText(newText)
    }
    const handleReverseClick = () =>{
        console.log("ReverseCase clicked "+ text)
        let newText = text.split("").reverse().join("");
        setText(newText)
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) =>{
        console.log("OnChange clicked ")
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("gfjhgeyhkjh")     //correct way to change text
    //text = "new text"   //wrong way
    return (
        <>
        <div className="container" style = {{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="3"></textarea>
            </div>  {/* {{}} one for writing js and another for writing object  */}
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleReverseClick}>convert to Reverse Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>remove extra spaces</button>
        </div>
        <div className="container my-3" style = {{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2> Preview</h2>
            <p>{text.length>0?text:"enter to preview"}</p>
        </div>
        </>
    )
}

