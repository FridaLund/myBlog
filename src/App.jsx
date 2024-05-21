import './App.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Write from "./pages/Write";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <UserProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Sign in" element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
};

export default App;
