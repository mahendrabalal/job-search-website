import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";
import ThemeContext from "../context/theme.context";

function JobDetails({ jobs }) {
  const { id } = useParams();
  console.log("Job ID from URL:", id);
  console.log("Jobs Array:", jobs);
  const jobItem = jobs.find(el => el.id === Number(id));
  console.log("Matched Job Item:", jobItem);
  const[isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({name: "", email: "", coverLetter:""});
  const[isSubmitted, setIsSubmitted] = useState(false);

const handleChange= (e) => {
  const {name, value} = e.target;
  setFormData({...formData, [name]: value});
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted", formData)
  setFormData({name:"", email:"", coverLetter:""});
  setIsApplying(false);
  setIsSubmitted(true);
};

const value = useContext(ThemeContext);


  return (
    <div className={"jobDetailsPage " + value.theme}  key={jobItem.id}>
      <h2>{jobItem.title}</h2>
      <div id="job-details">
        <p><strong>Company:</strong> {jobItem.company}</p>
        <p><strong>Location:</strong> {jobItem.location}</p>
        <p><strong>Type:</strong> {jobItem.type}</p>
        <p><strong>Description:</strong> {jobItem.description}</p>
        <p><strong>Salary:</strong> {jobItem.salary}</p>
        <p><strong>Requirements:</strong> {jobItem.requirements.join(", ")}</p>
        <p><strong>Responsibilities:</strong> {jobItem.responsibilities.join(", ")}</p>

      </div>
    <br />
    {isSubmitted ? (<p className="submitted-page"> You have submitted your Application</p>):(
      <>
      <button className="apply-now-button" onClick={() => setIsApplying(!isApplying)}>{isApplying?"Cancel":"Apply Now"}</button>
      {isApplying && (
      <form className="apply-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">
      Name:
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter:</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-application-button">
          Submit application
          </button>
          </form>

      )}
      </>
    )}
    </div>
  );
}

export default JobDetails;


