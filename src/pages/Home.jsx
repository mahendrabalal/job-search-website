
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/theme.context";
import "./Home.css";

function Home({ jobs, setJobs }) {
  const value = useContext(ThemeContext);

  function deleteJob(id) {
    const updatedJobList = jobs.filter((el) => el.id !== id);
    setJobs(updatedJobList);
  }

  return (
    <div className={"jobListPage " + value.theme}>
    <Link id="no-style" to={`/add-job`}>
      <button>+</button>
    </Link>
      {jobs.map((job) => {
        return (
          <div className="job-card" key={job.id}>
            <Link id="no-style" to={`/jobs/${job.id}`}>
            <h3>{job.title}</h3>
            <div id="job-type">
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.type}</p>
            </div>
            <p>{job.description}</p>
            <p>{job.salary}</p>
            </Link>
            <button id="delete-btn" onClick={() => deleteJob(job.id)}> ❌ </button>
          </div>
        );
      })}
    </div>
  );
}
export default Home;