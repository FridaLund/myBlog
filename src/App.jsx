import './index.css';
import Home from "./pages/Home";
import Write from "./pages/Write";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpComponent from './components/SignUpComponent';
import LogInComponent from './components/LogInComponent';
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
        <Route path="/write" element={<Write />} />
      </Route>

      <Route path="/login" element={<LogInComponent />} />
      <Route path="/signup" element={<SignUpComponent />} />
      <Route path="/*" element={<Home />} />
      
      </Routes>

     </BrowserRouter>
    </PostProvider>

  </AuthProvider>
  );
};

export default App;
