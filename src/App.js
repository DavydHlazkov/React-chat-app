import StartingPage from "./components/StartingPage/StartingPage";
import {Route, Routes} from "react-router-dom"
import NotFound from "./components/NotFound/NotFound";
import "./App.css"
import Chat1 from "./components/Chat1/Chat1";
import Chat2 from "./components/Chat2/Chat2";
import Chat4 from "./components/Chat4/Chat4";
import Chat3 from "./components/Chat3/Chat3";



function App() {
  
  return (
    <div className='main'>
       <Routes>
          <Route path="/" element={<StartingPage/>} />
          <Route path="/1" element={<Chat1/>} />
          <Route path="/2" element={<Chat2/>} />
          <Route path="/3" element={<Chat3 />} />
          <Route path="/4" element={<Chat4/>} />
          <Route  path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;


