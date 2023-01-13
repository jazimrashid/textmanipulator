import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick=function(){
        let newText=text.toUpperCase();
        if (newText!==""){
          props.showAlert("Converted to Uppercase","success")
        } else{
          props.showAlert("Please enter some text","warning")
        }
       
        
setText(newText)
    }
    const handleLcClick=function(){
        let newText1=text.toLowerCase();
        if (newText1!==""){
          props.showAlert("Converted to Lowercase","success")
        } else{
          props.showAlert("Please enter some text","warning")
        }
        

        
setText(newText1)

    }
  
    const handleClearText=function(){
      let newText1="";
      props.showAlert("Text Cleared","success")
      
setText(newText1)
  }
  const handleRsText=function(){
    let newText2=text.replace(/[^\w\s]/gi, '');;
    if (newText2!==""){
      props.showAlert("symbols removed","success")
    } else{
      props.showAlert("Please enter some text","warning")
    }
setText(newText2)
}
    const handleOnChange=function(event){
        
setText(event.target.value)
    }
    const [text, setText] = useState("");
    let words = text.split(" ").length;
   if(text.length===0){
    words=0
   
    
 }
 

   const handleCopy = function(){
   let text = document.getElementById("myBox")
   text.select()
   navigator.clipboard.writeText(text.value)
   
    props.showAlert("Copied to clipboard","success")
  
   }
    const handleExtraSpaces=function(){
      let newText= text.split(/[ ]+/)
      setText(newText.join(" "))
      if (newText!==""){
        props.showAlert("Extra spaces removed","success")
      } else{
        props.showAlert("Please enter some text","warning")
      }
    }
  return (
    <>
     <div>
     
     <div className="mb-3">
      <b> <label htmlFor="myBox" className="form-label">{props.heading}</label></b>
       <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to uppercase</button> 
     <button className="btn btn-primary mx-2 my-2" onClick={handleLcClick}>convert to lowercase</button>
     <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
     <button className="btn btn-primary mx-2 my-2" onClick={handleRsText}>Remove Symbols</button>
     <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
     <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
   
         </div>
         <div className="container my-2">
            <h1>Your text summary</h1>
            <p>{words} words and {text.length} characters</p>
            <p>Average time that will take you to read this text is {60*0.008*words}-seconds</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter your text above to preview it here"}</p>
         </div>
    </>
   
  )
}
