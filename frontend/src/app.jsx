import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/login"
import ProtectedRoute from "./components/protected";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Header from "./components/header";
import "./styles/global.css"
import NotFound from "./pages/notfound";

const App=() => {

  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/register" element={<><Header/><Register /></>} />
        <Route path="/login" element={<><Header/><Login /></>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App