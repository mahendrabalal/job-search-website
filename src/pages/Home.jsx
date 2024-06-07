import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = () => {
    axios
      .get("https://job-search-website-backend.adaptable.app/jobs")
      .then((response) => {
        setJobs(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="jobListPage">
      {jobs.map((job) => {
        return (
          <div className="job-card" key={job.id}>
            <Link to={`/jobs/${job.id}`}>
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
