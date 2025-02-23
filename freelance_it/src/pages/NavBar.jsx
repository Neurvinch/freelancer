import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode} from "jwt-decode"

const NavBar = () => {
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    useEffect ( () =>{
        const token = localStorage.getItem('token');
         if(!token) {
            navigate('/login');
         }
         if(token) {
            try { 
                const decode = jwtDecode(token);
            setRole(decode.role);
                
            } catch (error) {
                 console.log(error);
            }
           
         }

    },[])


    const handleSignout =  (e) =>{
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/login');
    }

     const renderLinks = () =>{
        if(role === 'client') {
            return (
                <> 
                <Link to="/profile" > Profile</Link>
                  <Link to= "/job-create" >Create Job</Link>  
                  <Link to= "/jobs" > Jobs</Link>
                  <Link to= "/client/jobs" > My Jobs</Link>
                  <Link to= "/jobs/:id/proposal"  > My Jobs's Proposals </Link>
                  <Link to="/signout" onClick={handleSignout}> Signout</Link>
                </>
            )
        };

        if(role === 'freelancer') {
            return (
                <>
                  <Link to= "/profile" >Profile</Link>
                  <Link to= "/jobs" >Jobs</Link>
                  <Link to="/jobs/:id/proposal/new" > </Link>
                  
                
                </>
            )
        }

     }
     
  return (
    <div>NAvBar</div>
  )
}

export default NavBar