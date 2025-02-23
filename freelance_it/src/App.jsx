import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import JobPost from './pages/JobPost'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import FetchJobList from './pages/FetchJobList'
import JobDetails from './pages/JobDetails'
import ProposalSubmit from './pages/ProposalSubmit'

function App() {


  return (

    <>
    <Router>
      <Routes>
        <Route  path='/'  element ={<HomePage/>}    />
        <Route path='/register' element = {<Register/>}     />
        <Route path='/login' element = {<Login/>}     />
        <Route  path ="/job-create"  element={<JobPost/>}      />
        <Route  path='/profile'  element = {<Profile/>}  />
<<<<<<< HEAD
        <Route   path='/editProfile' element = {<EditProfile/>}  />
        <Route   path='/jobs' element={<FetchJobList/>}     />
        <Route   path='/jobs/:id' element = {<JobDetails/>}    />
        <Route   path='/jobs/:jobId/proposal/new' element = {<ProposalSubmit/>}  />

=======
>>>>>>> ce4d043a6f16c311d27bca644f99797fdcd168dd
      </Routes>
    </Router>
      
    </>
  )
}

export default App
