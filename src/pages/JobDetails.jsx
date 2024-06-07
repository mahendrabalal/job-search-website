import { useParams } from "react-router-dom";
import "./JobDetails.css";

function JobDetails({ jobs }) {
  const { id } = useParams();
  const jobItem = jobs.find(job => job.id === id);

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
    </div>
  );
}

export default JobDetails;