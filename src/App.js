import './App.css';
import React,{useState} from 'react';
import Navbar from './component/Navbar.js';
// import About from './component/About.js';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showalert = (msg,type)=>{
    setAlert({
      msg,
      type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const tgmod = ()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor="#6B6B6B";
      showalert("Dark Mode Is Enabled","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showalert("Light Mode Is Enabled","success");
    }
  }
  console.log(alert)
  return (
    <>
    <Navbar title="TextUtils" mode={mode} tgmod={tgmod}/>
    <Alert alert={alert}/>
    <div className="container">

      <TextForm showalert={showalert} heading="Enter the text" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
