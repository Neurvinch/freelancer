import React from 'react'
import { Link } from 'react-router-dom'


const MyJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            return navigate('/login');
        }
        const responsefetch = axios.get("/client/jobs")
        .then((res) => {
          setJobs(res.data.jobs);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("Error fetching jobs");
          setLoading(false);
        });
        responsefetch();
    }, []);
  
    if (loading) return <p>Loading your jobs...</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">My Jobs</h2>
        {jobs.length === 0 ? (
          <p>You haven't posted any jobs yet.</p>
        ) : (
          <ul>
            {jobs.map((job) => (
              <li key={job._id} className="border p-4 mb-2">
                <Link to={`/client/jobs/${job._id}`} className="text-blue-600">
                  {job.title} - ${job.budget}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
  )
}

export default MyJobs