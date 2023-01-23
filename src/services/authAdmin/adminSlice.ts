import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IAuthState } from "../../interface/interface";

export const getLoginAdmin = createAsyncThunk(
  "auth/getLoginAdmin",
  async (data: any, thunkApi) => {
    const response = await axios.post(`${process.env.REACT_APP_API_KEY}/admin/login`, data);
    try {
      if( response.status === 200) {
        localStorage.setItem('authToken', JSON.stringify(response?.data?.token))
        return response.data;
      }
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.massege);
    }
  }
)

export const getAdminData: any = createAsyncThunk(
  "auth/getAdminDAta",
  async (emty , { fulfillWithValue , rejectWithValue }) => {
  const authToken: string | null = JSON.parse(localStorage.getItem('authToken')!)
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
    const response = await axios.get(`${process.env.REACT_APP_API_KEY}/adminProfile`, config);
    try {
      if(response.status === 200){
        return fulfillWithValue(response.data);
      }
    } catch (error: any) {
      if(error.response.status === 404){
        return rejectWithValue(error.response.data);
      } else {
         return rejectWithValue(error)
      }
    }
  }
)

export const getAdminProfile : any = createAsyncThunk(
  'auth/getAdminProfile',
  async (thunkApi : any) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/getAdminProfile`);
      return response.data;
    } catch (error : any) {
      return thunkApi.rejectWithValue(error.massege)
    }
  }
)

export const getUpdateAdminProfile : any = createAsyncThunk(
  'auth/getUpdateAdminProfile',
  async ( updateProfile : any ,  thunkApi: any) => {
    const authToken: string | null = JSON.parse(localStorage.getItem('authToken')!)
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  const response = await axios.put(`${process.env.REACT_APP_API_KEY}/updateAdmin/${updateProfile?.id}`,updateProfile?.formData , config );
    try {
      if(response.status === 200){
         getAdminData();
         return response.data;
      }
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.massege)
    }
  }
)

const initialState = {
  adminLogin: null,
  adminData : [],
  loading: false,
  error: false,
  getAdminProfileData: [],
  updateProfileData : [],
  message : '',
  getAdminMessage : '',
  getErrorAdminMessage : '',
} as IAuthState;

const authAdminReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getLoginAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLoginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.adminLogin = action.payload;
      })
      .addCase(getLoginAdmin.rejected, (state) => {
        state.error = true;
      })
    builder
      .addCase(getAdminData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminData.fulfilled, (state: any, action) => {
        state.loading = false;
        state.adminData = action.payload;
        state.getAdminMessage = 'Admin_Data_Get'
      })
      .addCase(getAdminData.rejected, (state) => {
        state.error = true;
        state.getErrorAdminMessage = "Admin data don't Get Plz try again"
      })
    builder
      .addCase(getAdminProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminProfile.fulfilled, (state: any, action) => {
        state.loading = false;
        state.getAdminProfileData = action.payload;
      })
      .addCase(getAdminProfile.rejected, (state) => {
        state.error = true;
      })
      builder
      .addCase(getUpdateAdminProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUpdateAdminProfile.fulfilled, (state: any, action) => {
        state.loading = false;
        state.toast = true;
        state.updateProfileData   =   "Admin Profile Update Successfully!";
      })
      .addCase(getUpdateAdminProfile.rejected, (state) => {
        state.error = true;
      })
  }
})
export default authAdminReducer.reducer;