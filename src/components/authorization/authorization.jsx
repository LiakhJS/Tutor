import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { authorizationThunk } from '../../redux/registrationAndAuthorization';
import { CustomInput } from '../../components/custom-input';
import { InputId, InputPlaceholder, InputType } from '../../components/utils.js';
import { ReactComponent as EyeIsClosed } from '../../assets/icons/eye-disable.svg';
import { ReactComponent as EyeIsOpened } from '../../images/Icon_eye_isopened.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/socials-facebook.svg';
import { ReactComponent as TwitterkIcon } from '../../assets/icons/socials-twitter.svg';
import { ReactComponent as GoogleIcon } from '../../assets/icons/socials-google.svg';


import './authorization.css';
import '../../components/button/button.css';
import { useDispatch } from 'react-redux';

export const Authorization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const baseUrl = 'http://212.193.62.231:8080/auth/singin'
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const btnTitle = 'Вход'
  const setPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const [dataIsSent, setDataIsSent] = useState(false);
  // const setAuthToken = token => {
  //   if (token) {
  //     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  //   }
  //   else
  //     delete axios.defaults.headers.common.Authorization;
  // }

  // const authRequest = async (data) => {
  //   axios
  //     .post(baseUrl, {
  //       'email': data.identifier,
  //       'password': data.password,
  //       'device': 'postman'
  //     })
  //     .then((response) => {
  //       const token = response.data.access_token;
  //       Cookies.set('token', token);
  //       setAuthToken(token);
  //     })
  //     .catch(() => setDataIsSent(true));
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    dispatch(authorizationThunk({
      data: {
        'email': data.email,
        'password': data.password,
        'device': 'postman'
      }

    }));
    navigate('/profile');

  }

  useEffect(
    () => {

      if (Cookies.get('token') != null) {
        // navigate('/books/all');

      }

    },
    []
  );

  const navigateToAuth = () => {
    navigate('/');
    // window.location.reload();
  }

  return (
    <section className="tutor-auth">


      {!dataIsSent &&
        <form className='custom-form auth' noValidate={true} onSubmit={handleSubmit(onSubmit)}>
          <h1 className='custom-title'>Вход </h1>
          <CustomInput
     
            type={InputType.Text}
            id={InputId.Login}
            placeholder={InputPlaceholder.Email}
            errors={errors.password || errors.identifier}
            required={true}
            autoComplete='on'
            {...register('email', { required: true })}
          />
          <div className='custom-item'>
            <label htmlFor='password' className='custom-label'>
              {InputPlaceholder.Password}
              <input
                id={InputId.Password}
                autoComplete='on'
                type={isPasswordVisible ? InputType.Text : InputType.Password}
                className='custom-input'
                placeholder={InputPlaceholder.Password}
                required={true}
                {...register('password', {
                  required: true
                })}
              />
            </label>

            {isPasswordVisible ?
              <EyeIsOpened onClick={setPassword} className='eye' />
              :
              <EyeIsClosed onClick={setPassword} className='eye' />
            }
            {(errors.password || errors.login) && <div className='field_invalid-and-restore'>
              <span className='field_invalid'>Неверный логин или пароль!</span>
              <NavLink to='/forgot-pass'> <span className='field_invalid restore '>Восстановить?</span></NavLink>
            </div>}
            {(!errors.password && !errors.login) && <NavLink to='/forgot-pass'><span className='field_valid forgot-pass'>Забыли пароль?</span></NavLink>}
          </div>
          <div className='btn-and-link-to-reg-page'>
            <input type='submit' value='Войти' className='filled-btn' />
            <div className='link-to-reg-page'>
              <span className='signup-question'>Нет учётной записи?</span>
              <NavLink to='/registration'>
                <div className='signup-link'>
                  <span>Зарегистрироваться</span>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="social-links">
            <span>или</span>
            <span>Войдите с помощью</span>
            <div className="social-links_bl">
              <div className="facebook">
                <FacebookIcon className="facebook_icon" />
              </div>
              <div className="twitter">
                <TwitterkIcon className="twitter_icon" />
              </div>
              <div className="google">
                <GoogleIcon className="google_icon" />
              </div>

            </div>
          </div>
        </form>}
      {dataIsSent &&
        'data sent'
      }
    </section>
  )
}
