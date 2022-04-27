import {Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import EditTodo from "./components/EditTodo";
function App() {
  // const API = process.env.React_App_MY_API;
  // console.log(API)
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
