import {Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import EditTodo from "./components/EditTodo";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/edit/:id" element={<EditTodo />} ></Route>
      </Routes>
      
      
     
    </div>
  );
}

export default App;
