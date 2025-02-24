import { BrowserRouter as Router, Routes , Route, useLocation} from 'react-router-dom'
import './App.css'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import JobPost from './pages/Client/JobPost'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import FetchJobList from './pages/Client/FetchJobList'
import JobDetails from './pages/Client/JobDetails'
import ProposalSubmit from './pages/Freelancer/ProposalSubmit'
import ProposalList from './pages/ProposalList'
import ProposalEdit from './pages/Freelancer/ProposalEdit'
import ClientProposal from './pages/Client/ClientProposal'
import MyJobs from './pages/Client/MyJobs'
import Signout from './pages/Auth/Signout'
import NavBar from './pages/NAvBar'
import FreelancerJobDetails from './pages/Freelancer/FreelncerJobDetails'
import FreelancerJobFetch from './pages/Freelancer/FreelancerJobFetch'
import FreelancerPRoposalsview from './pages/Freelancer/FreelancerPRoposalsview'
import Payement from './pages/Payement'


function AppContent() {
  const location = useLocation();
  const hideNavBarRoutes = ['/login', '/register' ,'/'];
    
  return (

    <>
              {!hideNavBarRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        
        <Route  path='/'  element ={<HomePage/>}    />
        <Route path='/register' element = {<Register/>}     />
        <Route path='/login' element = {<Login/>}     />
        <Route   path='/signout' element = {<Signout/>} />

            <Route  path='/profile'  element = {<Profile/>}  />
            <Route   path='/editProfile' element = {<EditProfile/>}  />


   
        <Route  path ="/job-create"  element={<JobPost/>}      />
       <Route  path='/client/jobs/:id/proposal'  element = {<ClientProposal/>}  />
        
        <Route   path='/jobs' element={<FreelancerJobFetch/>}     />
        <Route   path='/jobs/:id' element = {<JobDetails/>}    />
        <Route path ="/client/jobs" element ={<MyJobs/>}       />
        <Route    path='/jobs/:id/freelancer' element={<FreelancerJobDetails/>}      />
        <Route   path='/proposals/my' element={<FreelancerPRoposalsview/>}       />

        <Route   path='/jobs' element={<FetchJobList/>}     />

        
        <Route   path='/jobs/:jobId/proposal/new' element = {<ProposalSubmit/>}  />
       <Route    path='/jobs/:jobId/proposal' element = {<ProposalList/>}  />
       <Route    path='/proposal/:id/edit' element = {<ProposalEdit/>} />

       <Route path='/payment' element={<Payement/>}/>
      </Routes>
   
      
    </>
  )
}

   function App (){
    return (
      <Router>
        <AppContent/>
      </Router>
    )
   }

export default App
