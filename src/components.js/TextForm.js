import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleOnChange=(event)=>{
        setText(event.target.value)
      }

    const handleUC=()=>{
        let newText= text.toUpperCase()
        setText(newText)
        props.showAlert('Converted To UpperCase', 'Success')
    }
    const handleLC=()=>{
        let newText= text.toLowerCase()
        setText(newText)
        props.showAlert('Converted To LowerCase', 'Success')
    }
    const handleClear=()=>{
      let newText=(' ')
      setText(newText)
      props.showAlert('Text Cleared', 'Success')
    }
    const handleCapitalize=()=>{
      let newText= text.split(' ');
      for (let i = 0; i<newText.length; i++){
        newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1)
      }
      setText(newText.join(' '))
      props.showAlert('Capitilized First Letters', 'Success')

    }
    const handleWideSpace=()=>{
     let newText=text.split(/\s+/)
      setText(newText.join (' '))
      //setText(text.replace(/\s+/g,' '))
      props.showAlert('Extra Spaces Are Removed', 'Success')

    }
    
  return (
<div>      
  <div className={`text-center text-${props.mode==='light'? 'dark':'light'}`} style={{marginTop: '30px'}}>
      <h1><strong>"Enter The Text Below"</strong></h1>
  </div>
  <div className="container">
    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'? '#46435e': 'white', color: props.mode==='dark'? 'white': 'black'
}} placeholder="Leave a comment here" id="floatingTextarea" rows="10" value={text} onChange={handleOnChange}></textarea>
</div>
<div className="container mx-2">
<button type="button" className="btn btn-primary my-2 mx-2" onClick={handleUC}>CONVERT TO UPPER CASE</button>
<button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLC}>CONVERT TO LOWER CASE </button>
<button type="button" className="btn btn-primary my-2 mx-2" onClick={handleClear}>CLAER THE TEXT </button>
<button className='btn btn-primary my-2 mx-2' onClick={handleCapitalize}>CAPITALIZE WORDS</button>  
<button className='btn btn-primary my-2 mx-2' onClick={handleWideSpace}>REMOVE EXTRA SPACE</button> 
</div>
<div className='Summary' style={{ color: props.mode==='dark'? 'white': 'black'}}>
<h2>Text Summary </h2> 
<p>Words: {text.split(/\s+/).filter((word)=>{return  word.length !== 0}).length} words</p>
<p>Characters: {text.replace(/\s/g, "").length}</p>
<p>Minutes to read:{0.008* text.split(" ").filter((word)=>{return  word.length !== 0}).length} </p>
<h2>Preview</h2>
<p>{text.length>0? text:'Noting To Preview'}</p>
</div>
</div>
  )
}
