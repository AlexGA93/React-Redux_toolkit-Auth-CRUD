import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginFormType, UserStateType } from "../../types";
import {
  checkLocalStorage,
  persistLocalStorage,
  // clearLocalStorage,
  // persistLocalStorage,
  userKey,
} from "../../utils/localStorage";
import axios from "axios";
// import { singleUser } from "../../data/data";




export const loginUser = createAsyncThunk('user/login', async (formValue:LoginFormType) => {
  
  /**
   * Code to use in case of develop a proper backend application
   */
  // const userResponse = await axios.post(' http://localhost:3000/login', {email, password});
  // const token =  userResponse.data;
  // // localStorage
  // persistLocalStorage('singleUser', token);
  // return token;

  // For this example we're going to compare our json-server singleUser and update our localstorage and local state

  const singleUserResponse = await axios.get('http://localhost:3000/singleUser');
  const singleUser = singleUserResponse.data;
  return singleUser;
});

export const emptyInitialState: UserStateType = {
  user: {
    id: 0,
    title: "",
    img: "",
    info: {
      username: "",
      fullname: "",
      email: "",
      phone: "",
      status: "",
      role: "",
    },
    chart: {
      dataKeys: [],
      data: [],
    },
    activities: [],
  },
  isLoading: false,
  error: null
};

export const userSlice = createSlice({
  name: "user",
  initialState: checkLocalStorage(userKey) ? JSON.parse(checkLocalStorage(userKey) as string) : emptyInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;      
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
  }
});

export const {  } = userSlice.actions;
export default userSlice.reducer;