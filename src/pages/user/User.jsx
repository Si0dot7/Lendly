import { useSelector } from 'react-redux'



const User = ({children}) => {
    const user = useSelector((state)=>state.user)

    console.log('userRoute',user);
    

  return user && user.user?.token ? children : <div className='bg-white h-screen flex justify-center'><p className='flex items-center justify-center text-5xl font-bold'>Loading...</p></div>
    
}

export default User