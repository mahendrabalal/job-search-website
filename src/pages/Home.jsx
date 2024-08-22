
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/theme.context";
import "./Home.css";
import axios from "axios";
import { API_URL } from "../config";

function Home({ jobs, setJobs }) {
  const value = useContext(ThemeContext);

  function deleteJob(id) {
    const updatedJobList = jobs.filter((el) => el.id !== id);
    axios.delete(`${API_URL}/jobs/${id}`);
    setJobs(updatedJobList);
  }

  return (
    <div className={"jobListPage " + value.theme}>
      {jobs.map((job) => {
        return (
          <div className={"job-card " + value.theme} key={job.id}>
            <Link id="no-style" to={`/jobs/${job.id}`}>
            <h3>{job.title}</h3>
            <div id="job-type">
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.type}</p>
            </div>
            <p>{job.description}</p>
            <p id="text-salary">{job.salary}</p>
            </Link>
            <div id="edit-buttons">
              <button id="delete-btn" onClick={() => deleteJob(job.id)}> ❌ </button>
              <Link id="no-style" to={`/edit-job/jobs/${job.id}`}>
                <button id="delete-btn" > 📝 </button>
              </Link>
    
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Home;