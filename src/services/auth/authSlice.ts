import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IinitialState, IRegister } from "../../interface/interface";



export const getRegisterUser = createAsyncThunk(
  "auth/getRegisterUser",
  async (data : IRegister, { fulfillWithValue , rejectWithValue } ) => {
    var formData = new FormData()
    formData.append('image', data?.image[0]);
    formData.append('firstName', data?.firstName);
    formData.append('lastName', data?.lastName);
    formData.append('email', data?.email);
    formData.append('phone', data?.phone);
    formData.append('password', data?.password);
    formData.append('cPassword', data?.cPassword);
    formData.append('age', data?.age);
    formData.append('gender', data?.gender);
    formData.append('zip', data?.zip);
    formData.append('address', data?.address);
    formData.append('city', data?.city);
    formData.append('state', data?.state);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_KEY}register`, formData);
      if (response.status === 200) {
        return  fulfillWithValue(response.data);
      }
    } catch (error: any) {
      if(error.response.status === 400){
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);




const initialState = {
  registerUser: null,
  loading: false,
  error: false,
  message: '',
} as IinitialState;

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRegisterUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRegisterUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "User_Register_Successfully & Plz wait ";
        state.registerUser = action.payload;
      })
      .addCase(getRegisterUser.rejected, (state) => {
        state.error = true;
      });
    
  },
});

export default authReducer.reducer;