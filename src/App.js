import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
// import Forgot from './pages/forgot';
import User from './pages/user';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:username" element={<User />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/forgot" element={<Forgot />} /> */}
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
