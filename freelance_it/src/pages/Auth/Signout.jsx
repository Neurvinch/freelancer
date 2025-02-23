import React from 'react'

const Signout = () => {
         
    const handleSignout = async () =>{
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
  return (
    <div>

    </div>
  )
}

export default Signout