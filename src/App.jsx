import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/edit" element={<Edit/>} />
      <Route path="*" element={<NotFound/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;
