import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JobDetails from "./pages/JobDetails";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = () => {
    axios
      .get("https://job-search-website-backend.adaptable.app/jobs")
      .then((response) => {
        setJobs(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className='root'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home jobs={jobs} />} />
        <Route path="/home" element={<Home jobs={jobs} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs/:jobId" element={<JobDetails jobs={jobs} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;