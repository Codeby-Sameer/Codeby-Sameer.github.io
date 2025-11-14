// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import StaffingPage from './pages/StaffingPage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import Contact from './components/Contact';
import About from './components/About';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="staffing" element={<StaffingPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;