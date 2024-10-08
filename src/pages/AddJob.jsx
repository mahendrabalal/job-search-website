import { useState, useContext } from "react";
import axios from "axios";
import "./AddJob.css";
import ThemeContext from "../context/theme.context";

function AddJob({ jobs, setJobs }) {
  const API_URL = "https://job-search-website-backend.adaptable.app/jobs"; // Correct API URL

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Full-time"); // Set a default value
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [requirements, setRequirements] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const handleSetTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleMinSalary = (e) => setMinSalary(e.target.value);
  const handleMaxSalary = (e) => setMaxSalary(e.target.value);
  const handleRequirements = (e) => setRequirements(e.target.value);
  const handleResponsibilities = (e) => setResponsibilities(e.target.value);

  const value = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const salary = `${minSalary} - ${maxSalary} USD`;

    const requirementsArray = requirements.split(",").map((req) => req.trim());
    const responsibilitiesArray = responsibilities.split(",").map((req) => req.trim());
    const postedDate = new Date().toISOString().split("T")[0];

    const newJob = {
      title,
      description,
      company,
      location,
      type,
      salary,
      requirements: requirementsArray,
      responsibilities: responsibilitiesArray,
      posted_date: postedDate,
    };

    // Corrected API POST request
    axios
      .post(API_URL, newJob)
      .then((res) => {
        console.log(res);
        setJobs([res.data, ...jobs]);

        // Clear form fields after submission
        setTitle("");
        setDescription("");
        setCompany("");
        setLocation("");
        setType("Full-time"); // Reset to default value
        setMinSalary("");
        setMaxSalary("");
        setRequirements("");
        setResponsibilities("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={"main-form " + value.theme}>
      <h2 id="add-job-text">Add a Job</h2>
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
          Minimum Salary
          <input
            className="add-job-form"
            name="minSalary"
            type="number"
            placeholder="Minimum Salary"
            onChange={handleMinSalary}
            value={minSalary}
          />
        </label>

        <label>
          Maximum Salary
          <input
            className="add-job-form"
            name="maxSalary"
            type="number"
            placeholder="Maximum Salary"
            onChange={handleMaxSalary}
            value={maxSalary}
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
          <button id="form-button" type="submit">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
