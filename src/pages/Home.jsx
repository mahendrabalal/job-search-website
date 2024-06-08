
import { Link } from "react-router-dom";
import "./Home.css";

function Home({ jobs }) {
  return (
    <div className="jobListPage">
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
          </div>
        );
      })}
    </div>
  );
}
export default Home;