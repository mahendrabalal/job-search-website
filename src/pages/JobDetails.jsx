import React,{useState} from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";

function JobDetails({ jobs }) {
  const { jobId } = useParams();
  const jobItem = jobs.find(job => job.id === jobId );

  const[isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({
    name: "";
    email: "";
    
  })
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
    <br></br>
      <button className="apply-now-button">Apply Now</button>
    </div>
  );
}

export default JobDetails;