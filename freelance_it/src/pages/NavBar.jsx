import React,{ useState, useEffect} from 'react'
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


    const handleSignout =  async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.get('/signout');
            if(res.data.success){
               localStorage.removeItem('token');
               navigate('/login');
            }
           
       } catch (error) {
           console.log(error);
       }
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
        }

        else if(role === 'freelancer') {
            return (
                <>
                  <Link to= "/profile" >Profile</Link>
                  <Link to= "/jobs" >Jobs</Link>
                  <Link to="/jobs/:id/proposal" >My Proposals </Link>
                  <Link  to= '/proposal/:id/edit'> Edit Proposals </Link>
                  <Link to="/signout" onClick={handleSignout}> Signout</Link>
                  
                
                </>
            )
        } else {
            return (
                <>
                <Link to="/signout" onClick={handleSignout}> Signout</Link>
                </>
            )

        }

     }
     
  return (
    <div>
        <nav>
            <div>
                {renderLinks()}
            </div>
        </nav>
    </div>
  )
}

export default NavBar