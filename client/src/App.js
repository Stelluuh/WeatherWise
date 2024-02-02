import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import "./App.css"

const App = () => {

  return (
    
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;