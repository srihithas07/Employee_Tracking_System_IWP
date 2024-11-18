
import "./App.css";
import SignUp from "./components/SignUp";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ViewTable from "./components/ViewTable";
import Login from "./components/Login";
import EditPage from "./components/EditPage";
import About from "./components/About";
import More from "./components/More";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Admin from "./components/Admin";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";



function App() {
  return (
    <BrowserRouter>
    <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
            </li>
            <li style={styles.navItem}><Link to="/" style={styles.buttonLink}>Home</Link></li>
            <li style={styles.navItem}><Link to="/login" style={styles.buttonLink}>Sign In</Link></li>
            <li style={styles.navItem}><Link to="/signup" style={styles.buttonLink}>Sign Up</Link></li>
            <li style={styles.navItem}><Link to="/about" style={styles.buttonLink}>About</Link></li>
            <li style={styles.navItem}><Link to="/more" style={styles.buttonLink}>More</Link></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view" element={<ViewTable />} />
        <Route path="/edit-employee/:id" element={<EditPage />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/more" element={<More />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/passwordchange" element={<ForgotPassword />} />
        <Route path="/passwordtt" element={<ChangePassword />} />

      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  navbar: {
    background: '#f8f9fa', // Grey background color
    padding: '10px 0',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  buttonLink: {
    padding: '10px 20px', // Add horizontal padding for better spacing
    borderRadius: '20px', // Make the buttons more rounded
    background: 'orange', // Orange background color
    color: 'white',
    textDecoration: 'none',
    transition: 'background 0.3s',
  },
};

export default App;