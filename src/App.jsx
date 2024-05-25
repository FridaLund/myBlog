import './index.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Write from "./pages/Write";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { PostProvider } from './context/PostContext';

import PrivateRoutes from './components/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
  <AuthProvider>

    <PostProvider>
      <BrowserRouter>
      <Header />

      <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Sign in" element={<SignIn />}/>
      </Route>

      <Route path="/login" element={<LogIn/>} />
      <Route path="/signup" element={<SignUp />} />

      </Routes>

     </BrowserRouter>
    </PostProvider>

  </AuthProvider>
  );
};

export default App;
