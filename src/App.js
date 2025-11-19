import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  let name = "Varun Reddy";
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About"/>
      <div className="container">
        <TextForm heading = 'Enter the Text to anlyize Below'/>
      </div>
      
    </>
  );
}

export default App;
