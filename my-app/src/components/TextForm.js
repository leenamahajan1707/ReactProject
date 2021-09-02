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
        props.showAlert(" String Reverse ","success")
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("text copied","success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces removed","success")
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
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'#949191':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="3"></textarea>
            </div>  {/* {{}} one for writing js and another for writing object  */}
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>convert to Reverse Text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy Text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>remove extra spaces</button>
        </div>
        <div className="container my-3" style = {{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes read</p>
            <h2> Preview</h2>
            <p>{text.length>0?text:"nothing to preview"}</p>
        </div>
        </>
    )
}

