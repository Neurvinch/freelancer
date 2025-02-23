import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/left.png'; // Importing image
import './FetchJobList.css';

const FetchJobList = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('budget');

    useEffect(() => {
        axios.get(`http://localhost:5000/api/jobs?filter=${filter}&sort=${sort}`)
            .then((res) => setJobs(res.data.jobs))
            .catch((err) => console.log(err));
    }, [filter, sort]);
    console.log(jobs);

    return (
        <div className="job-container">
            {/* Job Heading */}
            <h2 className="job-heading">Available Jobs</h2>

            {/* Filter Input */}
            <div className="input-wrapper">
                <input
                    type="text"
                    className="animated-input"
                    placeholder=" "
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <label>Filter by Category</label>
            </div>

            {/* Search Input */}
            <div className="input-wrapper">
                <input
                    type="text"
                    className="animated-input"
                    placeholder=" "
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <label>Search Jobs</label>
            </div>

            {/* Sort Dropdown */}
            <div className="input-wrapper">
                <select
                    className="animated-select black-select"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="budget">Sort by Budget</option>
                    <option value="createdAt">Sort by Date</option>
                </select>
            </div>

            {/* Job List */}
            <ul className="job-list">
                {jobs.map((job) => (
                    <li key={job._id} className="job-item">
                        <Link to={`/jobs/${job._id}`} className="job-link">
                            {job.title} - <span className="job-budget">${job.budget}</span> ({job.status})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchJobList;
