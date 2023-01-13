// import React, { useState } from 'react'


export default function About(props) {
    // let [myStyle,setMyStyle]=useState({
    //     color:"white",
    //     backgroundColor:"black"
    // } )
   let myStyle={
    color:props.mode==="dark"?"white":"#624F82",
    backgroundColor:props.mode==="dark"?"#624F82":"white"
   }
  
  return (
    <div className="container" style={myStyle}>
        <h1>
            About Us
        </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Text manipulator will help you to analyze your text.</strong> You can see the number of characters and number of words involved in your text and preview it. Furthermore we have assosiated a lot of functions with text manipulator like copy to clipboard, converting to lowercase and uppercase, removing symbols, removing extra spaces and clearing text etc. which can help you manipulate text in many ways.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo" >
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"  aria-expanded="false" aria-controls="collapseTwo">
       Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>Text manipulator is free of cost.</strong> Unlike some common web applications text manipulator will be free of cost
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree" >
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compaitable
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Text manipulator is compaitable in every browser.</strong> 
      </div>
    </div>
  </div>
</div>
{/* <div className="container">
<button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
</div> */}

    </div>
  )
}
