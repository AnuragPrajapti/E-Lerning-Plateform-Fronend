import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import authAdminReducer from './authAdmin/adminSlice'
import authUserReducer from './authUser/userSlice'

const rootReducer = combineReducers({
     authReducer : authReducer,
     authAdminReducer : authAdminReducer ,
     authUserReducer : authUserReducer,
})

export default rootReducer;