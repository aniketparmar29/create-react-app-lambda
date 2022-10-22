import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, SetText ] = useState("");
    // SetText("Enter The Text");
    const ctu = ()=>{
        let newtxt = text.toUpperCase();
        SetText(newtxt);
        props.showalert("Converted to uppercase","success");
    }
    const ctl = ()=>{
        let newtxt = text.toLowerCase();
        SetText(newtxt);
        props.showalert("Converted to lowercase","success");
    }
    const dab = (event)=>{
        SetText(event.target.value);
        // console.log(text);
    }
    const Reset = (event)=>{
        let newtxt = "";
        SetText(newtxt);
        props.showalert("TextBox Reset","success");
    }
    const copy = () =>{
      let txt = document.getElementById("mybox");
      txt.select();
      navigator.clipboard.writeText(txt.value);
      props.showalert("Copy in clipboard","success");
    }
    const extraspace = () =>{
      let newtext = text.split(/[ ]+/);
      SetText(newtext.join(" "));
      props.showalert("Extra Spaces Removed","success");
    }
    const wordget = (sen)=>{
      if(sen.length===0){
        return 0;
      }
let count=0;
let ak=0;
for(let j=0;j<=sen.length-1;j++){
  if(sen[0]===" "){
    ak++;
  }
  if(sen[sen.length-1]===" "){
    ak++;
    break;
  }
}
for(let i=0;i<=sen.length-1;i++){
  if(sen[i]===" "){
     count++;
  }
}
count=count+1;
return count-ak;
    }
  return (
    <>
    <div style={{ color:props.mode==='dark'?'white':'black'}} className='container'>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea type="text" value={text} onChange={dab} rows={10} style={{backgroundColor:props.mode==='dark'?'#6B6B6B':'white', color:props.mode==='dark'?'white':'black'}} className="form-control" id="mybox" aria-describedby="emailHelp"/>
  </div>
  <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={ctu}>Convert To Uppercase</button>
  <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={ctl}>Convert To Lowecase</button>
  <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={Reset}>Reset</button>
  <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={copy}>Copy Text</button>
  <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={extraspace}>Remove Extra Space</button>
  </div>
  <div style={{ color:props.mode==='dark'?'white':'black'}} className="container my-4">
    <h1>Your Text Summary</h1>
    <p>words: {wordget(text)} Characters: {text.length}</p>
    <p>Minutes To Read: {0.008*wordget(text)} </p>
    <h1>Preview</h1>
    <p>{text || "Enter Text To Preview"}</p>
  </div>
  </>
  )
}
