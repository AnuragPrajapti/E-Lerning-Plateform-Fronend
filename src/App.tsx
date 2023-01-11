import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/signUp/signup';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/signIn/signin';
import CommonNavbar from './common/navbar/navbar';
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


const App = () => {
  return (
    <div className="App">
      {/* <CommonIndex/> */}
      {/* <CommonNavbar /> */}
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='/message' element={<Messages />} />
        <Route path='/signin' element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/user_details' element={<UserDetails/>} />
        <Route path='admin_index' element={<PrivateRoutes isLogged={<AdminIndex />} />} >
            <Route path="/admin_index" element={<AdminProfile /> } />
            <Route path=':id' element={<UsersData />} />
            <Route path=':id/messages' element={<Messages />} />
            <Route path=':id/settings' element={<Settings />} />
        </Route>

       </Routes> 
       <ToastContainer autoClose={3000} />
    </div> 
    )
}

export default App;