import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useContext, useEffect, useState } from 'react';
import Loader from './components/Loader';
import { AuthContext } from './context/AuthContext';

function App() {
  const [loader, setLoader] = useState(false);
  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    if (loader === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loader]);

  return (<>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setLoader={setLoader} />} />
          <Route path="/login" element={<Login setLoader={setLoader} />} />
          <Route path="/signup" element={<Signup setLoader={setLoader} />} />
          {!currentUser ? (
            <Route path="/dashboard" element={<Navigate to="/login" />} />
          ) : (
            <Route path="/dashboard" element={<Dashboard setLoader={setLoader} />} />
          )}
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
    {loader && <Loader />}
  </>
  );
}

export default App;
