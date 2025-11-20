import "./App.css";
import About from "./components/About.js";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm.js";

function App() {
  let name = "Varun Reddy";
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About"/>
      <div className="container">
        {/* <TextForm heading = 'Enter the Text to anlyize Below'/> */}
        <About/>
      </div>
      
    </>
  );
}

export default App;
