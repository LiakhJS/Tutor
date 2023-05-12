import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
  authEndpoint,
  getStudentEndpoint,
  getTeacherEndpoint,
  getUserEndpoint,
  signUpBaseEndpoint,
  signUpStudentEndpoint,
  signUpTeacherEndpoint,
} from '../constants/routes';

const instance = axios.create();

instance.interceptors.request.use((config) => {
  const JWTToken = Cookies.get('token');
  if (JWTToken) {
    config.headers.Authorization = `Bearer ${JWTToken}`;
  }
  return config;
});

export const authorizationThunk = createAsyncThunk('auth', async ({ data }) => {

  const authData = await instance
    .post(`${authEndpoint}`, data)
    .then((response) => response.data);

  return authData;
});

export const getUserThunk = createAsyncThunk('get/user', async () => {
  const getUserData = await instance
    .get(`${getUserEndpoint}`)
    .then((response) => response.data);

  return getUserData;
});

export const signUpBaseThunk = createAsyncThunk(
  'signUp/base',
  async ({ data }) => {
    const signUpBaseData = await instance
      .post(`${signUpBaseEndpoint}`, data)
      .then((response) => response.data);

    return signUpBaseData;
  }
);

export const getTeacherThunk = createAsyncThunk('get/teacher', async () => {
  const getTeacherData = await instance
    .get(`${getTeacherEndpoint}`)
    .then((response) => response.data);

  return getTeacherData;
});

export const signUpTeacherThunk = createAsyncThunk(
  'signUp/teacher',
  async ({ data }) => {
    const signUpTeacherData = await instance
      .post(`${signUpTeacherEndpoint}`, data)
      .then((response) => response.data);

    return signUpTeacherData;
  }
);

export const getStudentThunk = createAsyncThunk('get/student', async () => {
  const getStudentData = await instance
    .get(`${getStudentEndpoint}`)
    .then((response) => response.data);

  return getStudentData;
});

export const signUpStudentThunk = createAsyncThunk(
  'signUp/student',
  async ({ data }) => {
    console.log(data);
    const signUpStudentData = await instance
      .post(`${signUpStudentEndpoint}`, data)
      .then((response) => response.data);
    return signUpStudentData;
  }
);

const initialState = {
  authorizationStatus: 'idle',
  userData: null,
  signUpBaseStatus: 'idle',
  signUpTeacherStatus: 'idle',
  getTeacherStatus: 'idle',
  signUpStudentStatus: 'idle',
  getStudentStatus: 'idle',
  getUserStatus: 'idle',
  userTeacher: null,
  userStudent: null,
};

const registrationAuthorization = createSlice({
  name: 'registrationAuthorization',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authorizationThunk.pending, (state) => {
      state.authorizationStatus = 'loading';
    });
    builder.addCase(authorizationThunk.fulfilled, (state, action) => {
      state.authorizationStatus = 'resolved';
      const token = action.payload.access_token;
      Cookies.set('token', token);
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
    });
    builder.addCase(signUpStudentThunk.rejected, (state) => {
      state.signUpStudentStatus = 'failed';
    });
    builder.addCase(getUserThunk.pending, (state) => {
      state.getUserStatus = 'loading';
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.getUserStatus = 'resolved';
      state.userData = action.payload;
    });
    builder.addCase(getUserThunk.rejected, (state) => {
      state.getUserStatus = 'failed';
    });
  },
});

export { registrationAuthorization };
