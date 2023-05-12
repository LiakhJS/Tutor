import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  signUpTeacherThunk,
  getTeacherThunk,
} from '../../store/regAndAutSlice';

import { Footer } from '../../components/footer/footer';
import { Button } from '../../components/button/button';
import { FileUploadSingle } from '../../components/upload/upload';
import { SecondaryRegistrationT } from '../../components/secondary-registration-t';
import { HeaderAuthorized } from '../../components/header-authorized';
import { Error } from '../../components/error/error';
import { Loader } from '../../components/loader/loader';
import unknownUser from '../../assets/icons/unknown-user.svg';

import './teacher-registration.css';
import '../../components/button/button.css';

export const TeacherRegistration = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const formData = new FormData();
  const signUpBaseStatus = useSelector(
    (state) => state.registrationAuthorization.signUpBaseStatus
  );
  const getTeacherStatus = useSelector(
    (state) => state.registrationAuthorization.getTeacherStatus
  );

  const signUpTeacher = (data) => {
    dispatch(signUpTeacherThunk(data));
  };

  useEffect(() => {
    if (signUpBaseStatus === 'resolved') {
      dispatch(getTeacherThunk());
    }
  }, [dispatch, signUpBaseStatus]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      formData.append('files', file);
      setFile(null);
    }
  }, [dispatch, file, formData]);

  return (
    <div className='wrapper'>
      <HeaderAuthorized />
      <main>
        {(signUpBaseStatus === 'loading' || getTeacherStatus === 'loading') && (
          <Loader />
        )}
        {signUpBaseStatus === 'failed' && <Error />}
        {signUpBaseStatus === 'resolved' && getTeacherStatus === 'resolved' && (
          <div className='main-container sec-reg'>
            <section className='profile_ava'>
              <div className='profile_ava_picture'>
                <img src={unknownUser} alt='profile-ava' />
              </div>
              <div className='profile-ava_change'>
                <div className='profile-ava_change_btns'>
                  <FileUploadSingle handleFileChange={handleFileChange} />
                  <Button type='button' className='empty-btn'>
                    Удалить
                  </Button>
                </div>
                <span>
                  Формат JPG, GIF или PNG. Максимальный размер до 800 KB
                </span>
              </div>
            </section>
            <SecondaryRegistrationT
              signUpTeacher={signUpTeacher}
              handleFileChange={handleFileChange}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
