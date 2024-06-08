import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./AddJob.css";

function AddJob({jobs, setJobs}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [requirements, setRequirements] = useState("");
  const [responsabilities, setResponsabilities] = useState("");
  

  const handleSetTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);
  const handleRequirements = (e) => setRequirements(e.target.value);
  const handleResponsabilities = (e) => setResponsabilities(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique id for the new food item
    const id = uuidv4();

    const newFood = { id, title, description, company, location, type, salary, requirements, responsabilities };

    setJobs([newFood, ...jobs]);

    setTitle("");
    setDescription("");
    setCompany("");
    setLocation("");
    setType("");
    setSalary("");
    setRequirements("");
    setResponsabilities("");
  };

  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <h2 id="add-food-text">Add a Job</h2>
        <label>
            Title
            <input className="add-job-form" name="title" type="text" placeholder="Title" onChange={handleSetTitle} value={title} />
          </label>

          <label>
            Description
            <input className="add-job-form" name="description" type="text" placeholder="Description" onChange={handleDescription} value={description} />
          </label>

          <label>
            Company
            <input className="add-job-form" name="company" type="text" placeholder="Company" onChange={handleCompany} value={company} />
          </label>

          <label>
            Location
            <input className="add-job-form" name="location" type="text" placeholder="Location" onChange={handleLocation} value={location} />
          </label>

          <label>
            Type
            <input className="add-job-form" name="type" type="text" placeholder="Type" onChange={handleType} value={type} />
          </label>

          <label>
            Salary
            <input className="add-job-form" name="salary" type="number" placeholder="Salary" onChange={handleSalary} value={salary} />
          </label>

          <label>
            Requirements
            <input className="add-job-form" name="requirements" type="text" placeholder="Requirements" onChange={handleRequirements} value={requirements} />
          </label>

          <label>
            Responsabilities
            <input className="add-job-form" name="responsabilities" type="text" placeholder="Responsabilities" onChange={handleResponsabilities} value={responsabilities} />
          </label>

        <div>
          <button id="form-button" type="submit">Add Job</button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;