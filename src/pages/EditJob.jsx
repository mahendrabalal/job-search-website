import { useEffect, useState } from "react";
import "./AddJob.css";
import { useContext } from "react";
import ThemeContext from "../context/theme.context";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditJob({ jobs, setJobs }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [requirements, setRequirements] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const nav = useNavigate();
  const { id } = useParams();
  const value = useContext(ThemeContext);

  useEffect(() => {
    // Fetch the job details for editing
    axios.get(`http://localhost:5005/jobs/${id}`)
      .then((res) => {
        const job = res.data;
        setTitle(job.title);
        setDescription(job.description);
        setCompany(job.company);
        setLocation(job.location);
        setType(job.type);
        setSalary(job.salary);
        setRequirements(job.requirements.join(", ")); // Assuming requirements are an array
        setResponsibilities(job.responsibilities.join(", ")); // Assuming responsibilities are an array
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedJob = { 
      title, 
      description, 
      company, 
      location, 
      type, 
      salary, 
      requirements: requirements.split(",").map(req => req.trim()), 
      responsibilities: responsibilities.split(",").map(res => res.trim())
    };

    axios.put(`http://localhost:5005/jobs/${id}`, updatedJob)
      .then(() => {
        // Refresh job list and navigate back to home
        return axios.get("http://localhost:5005/jobs");
      })
      .then((response) => {
        setJobs(response.data);
        nav("/home");
      })
      .catch((err) => {
        console.error("Error updating job:", err);
      });
  };

  return (
    <div className={"main-form " + value.theme}>
      <h2 id="add-job-text">Edit a Job</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input 
            className="add-job-form" 
            name="title" 
            type="text" 
            placeholder="Title" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title} 
          />
        </label>

        <label>
          Description
          <input 
            className="add-job-form" 
            name="description" 
            type="text" 
            placeholder="Description" 
            onChange={(e) => setDescription(e.target.value)} 
            value={description} 
          />
        </label>

        <label>
          Company
          <input 
            className="add-job-form" 
            name="company" 
            type="text" 
            placeholder="Company" 
            onChange={(e) => setCompany(e.target.value)} 
            value={company} 
          />
        </label>

        <label>
          Location
          <input 
            className="add-job-form" 
            name="location" 
            type="text" 
            placeholder="Location" 
            onChange={(e) => setLocation(e.target.value)} 
            value={location} 
          />
        </label>

        <label>
          Type:
          <select 
            name="type" 
            id="type" 
            onChange={(e) => setType(e.target.value)} 
            value={type}
            className="add-job-form"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
            <option value="Internship">Internship</option>
          </select>
        </label>

        <label>
          Salary
          <input 
            className="add-job-form" 
            name="salary" 
            type="text" 
            placeholder="Salary" 
            onChange={(e) => setSalary(e.target.value)} 
            value={salary} 
          />
        </label>

        <label>
          Requirements
          <input 
            className="add-job-form" 
            name="requirements" 
            type="text" 
            placeholder="Requirements (e.g. skill1, skill2, skill3)" 
            onChange={(e) => setRequirements(e.target.value)} 
            value={requirements} 
          />
        </label>

        <label>
          Responsibilities
          <input 
            className="add-job-form" 
            name="responsibilities" 
            type="text" 
            placeholder="Responsibilities (e.g. task1, task2, task3)" 
            onChange={(e) => setResponsibilities(e.target.value)} 
            value={responsibilities} 
          />
        </label>

        <div>
          <button id="form-button" type="submit">Edit Job</button>
        </div>
      </form>
    </div>
  );
}

export default EditJob;
