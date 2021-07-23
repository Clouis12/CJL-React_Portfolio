import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/"; 
import {Footer} from "./components/Footer/"; 

function App() {
  return (
    <>
        <Header dateSpecial={(new Date()).toString()}/> 
        <Footer />  
    </>
  );
}

export default App;
