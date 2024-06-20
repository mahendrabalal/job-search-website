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
const nav =useNavigate();
  const handleSetTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);
  const handleRequirements = (e) => setRequirements(e.target.value);
  const handleResponsibilities = (e) => setResponsibilities(e.target.value);
  const {id} = useParams();
  const value = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();


    const newJob = { 
      title, 
      description, 
      company, 
      location, 
      type, 
      salary, 
      requirements, 
      responsibilities,
    };

    axios.put(`http://localhost:5005/jobs/${id}`, newJob)
    .then ((res) => {
console.log(res);
return axios
      .get("http://localhost:5005/jobs")
    
    })
    .then((response) => {
      setJobs(response.data);
  nav("/home")
    })
    .catch((err) => {
console.log(err);
    })

  };
  useEffect (() => {
    axios.get(`http://localhost:5005/jobs/${id}`)
    .then((res) => {
console.log(res.data);

setTitle(res.data.title);
setDescription(res.data.description);
setCompany(res.data.company);
setLocation(res.data.location);
setType(res.data.type);
setSalary(res.data.salary);
setRequirements(res.data.requirements);
setResponsibilities(res.data.responsibilities);
    })
    .catch(()=> {

    })
  }, [id])

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
            onChange={handleSetTitle} 
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
            onChange={handleDescription} 
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
            onChange={handleCompany} 
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
            onChange={handleLocation} 
            value={location} 
          />
        </label>

        <label>
          Type:
          <select 
            name="type" 
            id="type" 
            onChange={handleType} 
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
            onChange={handleSalary} 
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
            onChange={handleRequirements} 
            value={requirements} 
          />
        </label>

        <label>
          Responsibilities
          <input 
            className="add-job-form" 
            name="responsibilities" 
            type="text" 
            placeholder="Responsibilities (e.g. l, 2, 3)" 
            onChange={handleResponsibilities} 
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
