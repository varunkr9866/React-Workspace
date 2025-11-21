import { useState } from "react";
import "./App.css";
// import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
 
  const [mode, setMode] = useState('light');
   const toggleMode = ()=>{
   if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor ='grey';
   } else {
    setMode('light');
    document.body.style.backgroundColor ='light';
   }
    }
  let name = "Varun Reddy";
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About" mode ={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm  heading = 'Enter the Text to anlyize Below' mode ={mode} />
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
