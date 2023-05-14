import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentThunk } from '../../store/regAndAutSlice';

import { Button } from '../../components/button/button';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header';
import { Error } from '../../components/error/error';
import { Loader } from '../../components/loader/loader';

import Cookies from 'js-cookie';

import '../profile-page/profile-page.css';
import './profile-student-page.css';

export const ProfileStudentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpStudentStatus = useSelector(
    (state) => state.registrationAuthorization.signUpStudentStatus
  );
  const getStudentStatus = useSelector(
    (state) => state.registrationAuthorization.getStudentStatus
  );
  const userStudent = useSelector(
    (state) => state.registrationAuthorization.userStudent
  );

  const logOut = () => {
    Cookies.remove('token');
    navigate('/auth');
  };

  useEffect(() => {
    if (signUpStudentStatus === 'resolved') {
      dispatch(getStudentThunk());
    }
  }, [dispatch, signUpStudentStatus]);

  return (
    <div className='wrapper'>
      <Header />
      <main>
        {signUpStudentStatus === 'loading' &&
          getStudentStatus === 'loading' && <Loader />}
        {signUpStudentStatus === 'failed' && <Error />}
        {signUpStudentStatus === 'resolved' &&
          getStudentStatus === 'resolved' && (
            <div className='user'>
              <div className='user_type'>Student</div>
              <div className='user_inf'>
                <div className='user_inf_title'>Имя</div>
                <div className='user_inf_value'>{userStudent.user.first_name}</div>
              </div>
              <div className='user_inf'>
                <div className='user_inf_title'>Фамилия</div>
                <div className='user_inf_value'>{userStudent.user.last_name}</div>
              </div>
              <div className='user_inf'>
                <div className='user_inf_title'>Email</div>
                <div className='user_inf_value'>{userStudent.user.email}</div>
              </div>
              <div className='user_inf'>
                <div className='user_inf_title'>Verify email</div>
                <div className='user_inf_value'>
                  {String(userStudent.user.is_verify_email)}
                </div>
              </div>
              <div className='user_inf'>
                <div className='user_inf_title'>Дата Рождения</div>
                <div className='user_inf_value'>
                  {userStudent.user.date_of_birthday || 'дата рождения не выбрана'}
                </div>
              </div>
              <div className='user_inf'>
                <div className='user_inf_title'>Страна</div>
                <div className='user_inf_value'>
                  {userStudent.user.country || 'страна не выбрана'}
                </div>
              </div>
              <div className='user_inf'>
                <div className='user_inf_title'>Аватар</div>
                <div className='user_inf_value'>
                  {userStudent.photo || 'фото не выбрано'}
                </div>
              </div>
              {userStudent.learning_languages.map((item, index) => (
                <div key={item.language} className='user_inf'>
                  <div className='user_inf_title'>
                    {index + 1} язык изучения
                  </div>
                  <div className='user_inf_value'>
                    {item.language}, {item.level} , {item.description}
                  </div>
                </div>
              )) || null}
              <Button type='button' className='empty-btn' onClick={logOut}>
                Log out
              </Button>
            </div>
          )}
      </main>
      <Footer />
    </div>
  );
};
