import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./Components/AddUser";
import AllUser from "./Components/AllUser";
import CodeForInterview from "./Components/CodeForInterview";
import Navbar from "./Components/Navbar";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<CodeForInterview />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/allUser" element={<AllUser />} />
            <Route path="/edituser/:id" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
