import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Changed the text");
        // setText("Button is clicked");
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Letters are capitalized","success");
    }

    const handleOnChange = (event) => {
        // console.log("Handle change");
        setText(event.target.value);
    }

    const handleDownClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Letters are made small","success");
    }

    const handleSort = () => {
        let stringArr = text.toLowerCase().split(' ');

        stringArr.sort();
        let ans = "";

        stringArr.forEach((element) => {
            ans += element + " ";
        })

        setText(ans);
        props.showAlert("The sentence is sorted","success")
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Text is clear","success");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="myText" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" id="myText" rows="15" value={text} onChange={handleOnChange}></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick}>Covert to UpperCase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>Covert to LowerCase</button>
                    <button className="btn btn-primary my-3" onClick={handleSort}>Sort text</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear text</button>
                </div>
            </div>

            <div className="container">
                <h1>Your text summary</h1>
                <p>{text.length === 0? 0 : text[text.length-1] === " "? text.split(" ").length-1 : text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * (text.length === 0? 0 : text[text.length-1] === " "? text.split(" ").length-1 : text.split(" ").length)} Minutes read</p>
                <h2 className="my-2">Preview</h2>
                <p>{text.length > 0 ? text : "Enter the text above to see the Preview"}</p>
            </div>
        </>
    )
}

Textform.prototype = {
    heading: PropTypes.string,
};

Textform.defaultProps = {
    heading : "Enter text for analyzing",
};