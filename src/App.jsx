import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JobDetails from "./pages/JobDetails";
import AddJob from './pages/AddJob';
import Services from './pages/Services';
import "./App.css";
import PageNotFound from './pages/NotFoundPage';
import EditJob from './pages/EditJob';

function App() {
  const [jobs, setJobs] = useState([]);

  // Corrected API URL
  const API_URL = "https://job-search-website-backend.adaptable.app/jobs";

  const getAllJobs = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setJobs(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log('Error fetching jobs:', error));
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className='root'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home jobs={jobs} setJobs={setJobs} />} />
        <Route path="/home" element={<Home jobs={jobs} setJobs={setJobs} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs/:id" element={<JobDetails jobs={jobs} />} />
        <Route path="/add-job" element={<AddJob jobs={jobs} setJobs={setJobs} />} />
        <Route path="/edit-job/:id" element={<EditJob jobs={jobs} setJobs={setJobs} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
