import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const hendleupClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showalert("converted to uppercase !","success")
    }
    const hendleloClick = ()=>{
        // console.log("lowercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showalert("converted to lowercase !","success")
    }
    const hendleclearClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = ''
        setText(newText)
        props.showalert("the text was cleared !","success")
    }
    const hendleonchange = (Event)=>{
        console.log("on change")
        setText(Event.target.value)
    }
    const hendlecopyonclick = () =>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showalert("the text was copied !","success")
    }
    const hendleExteaSpace =() =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showalert("the extra space was cleared !","success")
    }
  return (
      <>
    <div className='container' style={{ color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='dark'?'#042743':'white' , color: props.mode==='dark'?'white':'#042743'}}  onChange={hendleonchange} rows="8"></textarea>
</div>
    <button className="btn btn-primary mx-1" onClick={hendleupClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={hendleloClick}>convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={hendleclearClick}>clear text</button>
    <button className="btn btn-primary mx-1" onClick={hendlecopyonclick}>copy text</button>
    <button className="btn btn-primary mx-1" onClick={hendleExteaSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-5" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2>preview</h2>
        <p><b>{text.length>0?text:"Enter Some Text In Above Text Box For Preview"}</b></p>
    </div>
    </>
)
}
