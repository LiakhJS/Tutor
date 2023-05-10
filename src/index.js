import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux';

import './index.css';

import { AuthorizationPage } from './pages/authorization-page/authorization-page';
import { RegistrationPage } from './pages/registration-page';
import {  StudentRegistration } from './pages/student-registration';
import { TeacherRegistration } from './pages/teacher-registration';
import { ProfilePage } from './pages/profile-page';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<AuthorizationPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/auth' element={<AuthorizationPage />} />
          <Route path='/teacher-registration' element={<TeacherRegistration/>} />
          <Route path='/student-registration' element={<StudentRegistration />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);



