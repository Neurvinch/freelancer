import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './FetchJobList.css'
const FetchJobList = () => {

    const [jobs ,setJobs] = useState([]);
    const [filter , setFilter] = useState("");
    const[sort ,setSort] = useState("budget");

     
    useEffect( () =>{
        axios.get(`http://Localhost:5000/api/jobs?filter=${filter}&sort=${sort}`)
        .then( (res) => setJobs(res.data.jobs))
        .catch( (err) => console.log(err))
    },[filter,sort]);
     

  return (
    <div className="job-list-container">
            <h2 className="job-list-title">Job List</h2>

            <input
                type="text"
                className="job-filter-input"
                placeholder="Filter by category"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />

            <select
                className="job-sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="budget">Sort by Budget</option>
                <option value="createdAt">Sort by Date</option>
            </select>

            <ul className="job-list">
                {jobs.map((job) => (
                    <li key={job._id} className="job-item">
                        <Link to={`/jobs/${job._id}`} className="job-link">
                            {job.title} - ${job.budget} ({job.status})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchJobList