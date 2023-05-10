
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// const BASE_URL = 'http://212.193.62.231:8080';
const instance = axios.create(
  // withCredentials: true,
  // baseURL: `${BASE_URL}`,
);

instance.interceptors.request.use((config) => {
  const JWTToken = Cookies.get('token');

  if (JWTToken) {
    config.headers.Authorization = `Bearer ${JWTToken}`;
  }

  return config;
});

export const authorizationThunk = createAsyncThunk(
  'auth', async ({ data }) => {
    console.log(data);
    const authData = await instance.post('http://212.193.62.231:8080/auth/singin', data).then(response => response.data);

    return authData;
  }
)

export const signUpBaseThunk = createAsyncThunk(
  'signUp/base', async ({ data }) => {
    console.log(data);
    const signUpBaseData = await instance.post('http://212.193.62.231:8080/auth/signup/base', data).then(response => response.data);

    return signUpBaseData;
  }
)
export const getTeacherThunk = createAsyncThunk(
  'get/teacher', async () => {
    const getTeacherData = await instance.get('http://212.193.62.231:8080/teacher').then(response => response.data);

    return getTeacherData;
  }
)

export const signUpTeacherThunk = createAsyncThunk(
  'signUp/teacher', async ({ data }) => {
    console.log(data);
    const signUpTeacherData = await instance.post('http://212.193.62.231:8080/auth/signup/teacher', data).then(response => response.data);

    return signUpTeacherData;
  }
)

export const getStudentThunk = createAsyncThunk(
  'get/student', async () => {
    const getStudentData = await instance.get('http://212.193.62.231:8080/student').then(response => response.data);

    return getStudentData;
  }
)

export const signUpStudentThunk = createAsyncThunk(
  'signUp/student', async ({ data }) => {
    console.log(data);
    const signUpStudentData = await instance.post('http://212.193.62.231:8080/auth/signup/student', data).then(response => response.data);
    return signUpStudentData;
  }
)


const initialState = {
  authorizationStatus: 'idle',
  signUpBaseStatus: 'idle',
  signUpTeacherStatus:'idle',
  getTeacherStatus:'idle',
  signUpStudentStatus:'idle',
  getStudentStatus:'idle',
  userTeacher: null,
  userStudent: null
}

const registrationAuthorization = createSlice({
  name: 'registrationAuthorization',
  initialState,
  // reducers: {
  //   setIsCurrentUserComment: (state, action) => {
  //     state.commentStatusLoading = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(authorizationThunk.pending, (state) => {
      state.authorizationStatus = 'loading';
    });
    builder.addCase(authorizationThunk.fulfilled, (state, action) => {
      state.authorizationStatus = 'resolved';
      const token = action.payload.access_token;
      Cookies.set('token', token);
      console.log(token);
    });
    builder.addCase(authorizationThunk.rejected, (state) => {
      state.authorizationStatus = 'failed';
    });
    builder.addCase(signUpBaseThunk.pending, (state) => {
      state.signUpBaseStatus = 'loading';
    });
    builder.addCase(signUpBaseThunk.fulfilled, (state, action) => {
      state.signUpBaseStatus = 'resolved';
      const token = action.payload.access_token;
      Cookies.set('token', token);
      console.log(token);
    });
    builder.addCase(signUpBaseThunk.rejected, (state) => {
      state.signUpBaseStatus = 'failed';
    });
    builder.addCase(getTeacherThunk.pending, (state) => {
      state.getTeacherStatus = 'loading';
    });
    builder.addCase(getTeacherThunk.fulfilled, (state, action) => {
      state.getTeacherStatus = 'resolved';
     state.userTeacher = action.payload;

    });
    builder.addCase(getTeacherThunk.rejected, (state) => {
      state.getTeacherStatus = 'failed';
    });
    builder.addCase(signUpTeacherThunk.pending, (state) => {
      state.signUpTeacherStatus = 'loading';
    });
    builder.addCase(signUpTeacherThunk.fulfilled, (state, action) => {
      state.signUpTeacherStatus = 'resolved';
      console.log(action.payload)
    });
    builder.addCase(signUpTeacherThunk.rejected, (state) => {
      state.signUpTeacherStatus = 'failed';
    });
    builder.addCase(getStudentThunk.pending, (state) => {
      state.getStudentStatus = 'loading';
    });
    builder.addCase(getStudentThunk.fulfilled, (state, action) => {
      state.getStudentStatus = 'resolved';
     state.userStudent = action.payload;
    });
    builder.addCase(getStudentThunk.rejected, (state) => {
      state.getStudentStatus = 'failed';
    });
    builder.addCase(signUpStudentThunk.pending, (state) => {
      state.signUpStudentStatus = 'loading';
    });
    builder.addCase(signUpStudentThunk.fulfilled, (state, action) => {
      state.signUpStudentStatus = 'resolved';
      console.log(action.payload)
    });
    builder.addCase(signUpStudentThunk.rejected, (state) => {
      state.signUpStudentStatus = 'failed';
    });
  }
});

export { registrationAuthorization };
// export const { setRateModalIsOpened, setIsCurrentUserComment } = registrationAuthorization.actions;

