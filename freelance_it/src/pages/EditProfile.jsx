import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/left.png'; // Importing image
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

<<<<<<< HEAD
                             
                        })

                        const profileData = res.data.profile;

                        setFormData({
                            _id : profileData._id ,
                            name : profileData.name,
                            email : profileData.email,
                             profile :{
                                bio : profileData.profile?.bio || "" ,

                                skills : profileData.profile?.skills ?
                                profileData.profile?.skills.join(', ') : "",

                                portfolioLinks : profileData.profile?.portfolioLinks 
                                ? profileData.profile?.portfolioLinks.join(', ') : "",

                                GithubLinks : profileData.profile?.GithubLinks ?
                                profileData.profile?.GithubLinks.join(', ') : "",
                             }

                        });

                    
                } catch (error) {
                    setError(error.message);
                    
                } finally{
                    setLoading(false);
                }
               }

               fetchProfile();
       },[] );


    const handleChange = (e) =>{

        const {name , value} = e.target;

        if(['bio', 'skills' , 'portfolioLinks' , 'GithubLinks'].includes(name)){

            setFormData( (prev) =>({
                ...prev ,
                profile :{
                    ...prev.profile,
                    [name] : value 
                }
            }) );
        } else{
            setFormData( (prev) =>({
                ...prev ,
                [name] : value
            }))
        }

    }
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
             const token = localStorage.getItem('token');

             if(!token) {
                setError("Please login first");
             }

             const updatedProfile = {
                name : formData.name,

                email : formData.email,

                profile : {
                    bio : formData.profile.bio,

                    skills : formData.profile.skills
                    .split(",")
                    .map( (s) =>s.trim()   )
                    .filter(Boolean),

                    portfolioLinks : formData.profile.portfolioLinks
                    .split(",")
                    .map( (s) =>s.trim()   )
                    .filter(Boolean),

                    GithubLinks : formData.profile.GithubLinks
                    .split(",")
                    .map( (s) =>s.trim()   )
                    .filter(Boolean),

                }

             };


             await axios.put('http://localhost:5000/api/profile' , updatedProfile , {
            headers : {
                'Authorization' : `Bearer ${token}`
            },
            withCredentials : true
        } 
        )
         navigate('/profile');

        } catch (error) {
            
        }
    }

 { error && <p>{error}</p>}
 { loading && <p>Loading...</p>}

  return (
    <div className="profile-page">

  <div className="profile-container">
    <h1>Edit Profile</h1>

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <label>Bio:</label>
        <textarea
          name="bio"
          value={formData.profile.bio}
          onChange={handleChange}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <label>Skills:</label>
        <input
          type="text"
          name="skills"
          value={formData.profile.skills}
          onChange={handleChange}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <label>Portfolio Links:</label>
        <input
          type="text"
          name="portfolioLinks"
          value={formData.profile.portfolioLinks}
          onChange={handleChange}
          className="input-box"
        />
      </div>

      <div className="form-group">
        <label>Github Links:</label>
        <input
          type="text"
          name="GithubLinks"
          value={formData.profile.GithubLinks}
          onChange={handleChange}
          className="input-box"
        />
      </div>

      <button type="submit" className="btn">
        Save Changes
      </button>
    </form>
  </div>
</div>

  )
}

export default EditProfile
=======
export default FetchJobList;
>>>>>>> df4324f15c9d3b7d126df895406cea686cb0332d
