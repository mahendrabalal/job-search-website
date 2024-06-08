import React,{useState} from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";

function JobDetails({ jobs }) {
  const { jobId } = useParams();
  const jobItem = jobs.find(job => job.id === jobId );

  const[isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({name: "", email: "", coverLetter:""
});
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

if(!jobItem) {
  return <div>Job not found</div>;
}

  return (
    <div className="jobDetailsPage"  key={jobItem.id}>
      <h2>{jobItem.title}</h2>
      <div id="job-details">
        <p><strong>Company:</strong> {jobItem.company}</p>
        <p><strong>Location:</strong> {jobItem.location}</p>
        <p><strong>Type:</strong> {jobItem.type}</p>
        <p><strong>Description:</strong> {jobItem.description}</p>
        <p><strong>Salary:</strong> {jobItem.salary}</p>
      </div>
    <br />
    {isSubmitted ? (<p> You have submitted your Application</p>):(
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


