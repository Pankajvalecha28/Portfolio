import "./App.css";
import NavBar from "./Components/NavBar";
import Tablepage from "./Pages/Tablepage";
import LoginPage from "./Pages/loginpage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Data" element={<Tablepage/>}/>
        
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
