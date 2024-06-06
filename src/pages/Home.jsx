import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home ({}){
  const [jobs, setJobs] = useState([]);

  const getAllJobs = () => {
    axios
      .get("https://job-search-website-backend.adaptable.app/jobs")
      .then((response) => {
        setJobs(response.data)
        console.log(response.data)
    })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllJobs();
  }, [] ) 

  return(
    <div className="jobListPage">
    
    </div>
  )
}

export default Home;