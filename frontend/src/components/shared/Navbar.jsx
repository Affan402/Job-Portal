import { LogIn, User2 } from 'lucide-react'
import React from 'react'
import { Link, Links, NavLink, useNavigate } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { setAuthUser } from '@/redux/authSlice';

const Navbar = () => {
  const {user} = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const avatarSrc = user?.profile?.profilePhoto || "";
  const avatarFallback = user?.fullname?.charAt(0)?.toUpperCase() || "U";

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {withCredentials: true});
      if (res.data.success){
        dispatch(setAuthUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  } 
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16 gap-4 px-4 md:px-8'>
        <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            {
              user && user.role == 'recruiter' ? (
                <>
                  <li> <Link to="/admin/companies">Companies</Link></li>
                  <li> <Link to="/admin/jobs">Jobs</Link></li>
                </>
              ) : (
                <>
                  <li> <Link to="/">Home</Link></li>
                  <li> <Link to="/jobs">Jobs</Link></li>
                  <li> <Link to="/browse">Browse</Link></li>
                </>
              )
            } 
          </ul>
          {
            !user ? (
              <div className='flex flex-wrap md:flex-nowrap items-center gap-2'>
                <Link to="/login"><Button variant="outline">LogIn</Button></Link>
                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b2fa7]">SignUp</Button></Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={avatarSrc} alt={user?.fullname || "User profile"} className="object-cover" />
                    <AvatarFallback>{avatarFallback}</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className='w-80'>
                  <div className='flex gap-4 space-y-2'>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={avatarSrc} alt={user?.fullname || "User profile"} className="object-cover" />
                      <AvatarFallback>{avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>{user?.fullname}</h4>
                      <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                    </div>
                  </div>
                  <div className='flex flex-col  text-gray-600 w-fit items-start my-2'>
                      {
                        user && user.role === 'student' && (
                        <div className='flex items-center'>
                          <User2 />
                          <Button className="cursor-pointer" variant="link"><Link to="/profile">View Profile</Link></Button>
                        </div>
                         ) 
                      }
                    
                    <div className='flex items-center'>
                      <LogIn />
                      <Button className="cursor-pointer" onClick={logoutHandler} variant="link">Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }

        </div>
      </div>
    </div>
  )
}

export default Navbar