import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IinitialState, ILoginUser } from "../../interface/interface";

const userToken: any | null = JSON.parse(localStorage.getItem('usersId')!);
const adminToken: any | null = JSON.parse(localStorage.getItem('authToken')!);

const config = {
    headers: {
        Authorization: `Bearer ${userToken?.token}`
    }
}

const authConfig = {
    headers: {
        Authorization: `Bearer ${adminToken}`
    }
}

export const getLoginUser = createAsyncThunk(
    "auth/getLoginUser",
    async (data: ILoginUser, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_KEY}/login`, data);
            if (response?.status === 200) {
                localStorage.setItem('usersId', JSON.stringify(response?.data))
                return fulfillWithValue(response.data);
            }
        } catch (error: any) {
            if (error?.response?.status === 404) {
                return rejectWithValue( error);
            } else if (error?.response?.status === 400) {
                return rejectWithValue(error.response.data);
            }
            else {
                return rejectWithValue(error);
            }
        }
    }
)

export const getUserDetails: any = createAsyncThunk(
    "auth/getUserDetails",
    async (emty, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_KEY}/user/${userToken?.Id}`, config)
            if (response.status === 200) {
                return fulfillWithValue(response.data);
            }
        } catch (error: any) {
            if (error.response.data === 404) {
                return rejectWithValue(error.response.data)

            } else {
                return rejectWithValue(error)
            }
        }
    }
)

export const getUpdateUserProfile: any = createAsyncThunk(
    "auth/getUpdateUserProfile",
    async (formData, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_KEY}/user/update/${userToken?.Id}`, formData, config)
            if (response.status === 200) {
                return fulfillWithValue(response.data);
            }
        } catch (error: any) {
            if (error?.response.data === 404) {
                return rejectWithValue(error.response.data)
            } else {
                return rejectWithValue(error);
            }
        }
    }
)

export const getDeleteUserProfile: any = createAsyncThunk(
    "auth/getDeleteUserProfile",
    async (id, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_KEY}/user/delete/${id}`, config)
            return fulfillWithValue(response.data);
        } catch (error: any) {
            if (error?.response.data === 400) {
                return rejectWithValue(error.response.data)
            } else {
                return rejectWithValue(error);
            }
        }
    }
)

export const getAllUsersData: any = createAsyncThunk(
    "auth/getAllUsersData",
    async (emty, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_KEY}/allUser`, authConfig)
            if (response.status === 200) {
                return fulfillWithValue(response.data)
            }
        } catch (error: any) {
            if (error.response.data === 404) {
                return rejectWithValue(error.response.data)
            } else {
                return rejectWithValue(error?.message)
            }
        }
    }
)

const initialState = {
    loginUser: null,
    loading: false,
    error: false,
    message: '',
    updateMessage: '',
    errorMessage: '',
    userData: [],
    getUserMessage: '',
    AllUserData: [],
    getUserDeleteMessage: '',
    getDeleteErrorMsg: '',
    falseState: false,
    loginErrorMessage: null,

} as IinitialState;

const authUserReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {

        builder
            .addCase(getLoginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getLoginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.loginUser = action.payload;
                state.message = 'User_Login_Sucessfully';
                state.falseState = true;
            })
            .addCase(getLoginUser.rejected, (state, action) => {
                state.error = true;
                state.loginErrorMessage = action.payload;
            })

        builder
            .addCase(getUserDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
                state.message = 'SuccessFully Data Get';
                state.falseState = true;
            })
            .addCase(getUserDetails.rejected, (state) => {
                state.error = true;
                state.errorMessage = "Data Not Found Please Try Again"
                state.falseState = true;
            })

        builder
            .addCase(getUpdateUserProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUpdateUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
                state.updateMessage = "User Update Success"
                state.falseState = true;
            })
            .addCase(getUpdateUserProfile.rejected, (state) => {
                state.error = true;
                state.falseState = true;
                state.errorMessage = 'user not update plz try again'
            })

        builder
            .addCase(getAllUsersData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllUsersData.fulfilled, (state, action) => {
                state.loading = false;
                state.AllUserData = action.payload;
                state.falseState = true;
                state.getUserMessage = "Get All Users Success"
            })
            .addCase(getAllUsersData.rejected, (state) => {
                state.error = true;
                state.falseState = true;
                state.errorMessage = 'Users not found plz try again';
            })
        builder
            .addCase(getDeleteUserProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDeleteUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.AllUserData = action.payload;
                state.getUserDeleteMessage = "Users Delete Succesfully"
                state.falseState = true;
            })
            .addCase(getDeleteUserProfile.rejected, (state) => {
                state.error = true;
                state.getDeleteErrorMsg = 'Bad Requiest Plz try again';
                state.loading = false;
                state.falseState = true;
            })
    },
});

export default authUserReducer.reducer;