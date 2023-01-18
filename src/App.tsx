import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/signUp/signup';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/signIn/signin';
import HomeIndex from './components/home/homeIndex';
import AdminProfile from './components/admin/adminProfile/adminPrpfile';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserDetails from './components/user_details/user_details';
import AdminIndex from './components/admin/adminIndex';
import UsersData from './components/admin/usersData/usersData';
import Settings from './components/admin/settings/settings';
import Messages from './components/admin/messages/message';
import PrivateRoutes from './components/privateRoutes/privateRoutes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from './components/profile/Profile';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='/message' element={<Messages />} />
        <Route path='/signin' element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/user_details' element={<UserDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='admin_index' element={<PrivateRoutes isLogged={<AdminIndex />} />}   >
          <Route index element={<UsersData />}  />
          <Route path='admin-profile' element={<AdminProfile />} />
          <Route path='messages' element={<Messages />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </div>    
  )
}

export default App;