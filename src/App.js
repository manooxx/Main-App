import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rockets from "./components/Rockets";
import Capsules from "./components/Capsules";


function App() {
  return (
    <div className="App">
      
   

    <BrowserRouter>
    <Header/>
    
      <Routes>
        

          <Route path="/" element={<Home/>}></Route>
          <Route path="/Rockets" element={<Rockets/>}></Route>
          <Route path="/Capsules" element={<Capsules/>}></Route>

        

         

      </Routes>

    </BrowserRouter>



    </div>
  );
}

export default App;
