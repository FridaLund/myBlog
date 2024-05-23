import './index.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Write from "./pages/Write";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { AuthProvider, useAuth } from './context/AuthContext';
import { PostProvider } from './context/PostContext';



const App = () => {
  const { currentUser } = useAuth();
  
  return (
    <AuthProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Sign in" element={<SignIn />}/>
      </Routes>
      <PostProvider></PostProvider>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
