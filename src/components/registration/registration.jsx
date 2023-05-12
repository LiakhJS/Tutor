import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CustomInput } from '../../components/custom-input';
import {
  InputId,
  InputPlaceholder,
  InputType,
} from '../../constants/utils.js';
import { signUpBaseThunk } from '../../store/regAndAutSlice';
import { ChooseUserInput } from '../choose-user-input';

import { ReactComponent as EyeIsClosed } from '../../assets/icons/eye-disable.svg';
import { ReactComponent as EyeIsOpened } from '../../assets/icons/Icon-eye-isopened.svg';

import './registration.css';
import '../custom-input/custom-input.css';
import '../../components/button/button.css';

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userType, setUserType] = useState('student');

  const userTypeCount = userType === 'student' ? '0' : '1';
  const userNavigate =
    userType === 'student' ? '/student-registration' : '/teacher-registration';

  const setPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data) => {
    dispatch(
      signUpBaseThunk({
        data: {
          email: String(data.email),
          password: String(data.password),
          first_name: String(data.firstName),
          last_name: String(data.lastName),
          device: 'postman',
          user_type: String(userTypeCount),
        },
      })
    );
    navigate(`${userNavigate}`);
  };

  return (
    <section className='tutor-reg'>
      <form
        className='custom-form'
        key='1'
        noValidate={true}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='reg-title-and-user-type'>
          <h1 className='custom-title'>Регистрация</h1>
          <div className='user-type-bl'>
            <h3>Зарегистрироваться как:</h3>
            <ChooseUserInput userType={userType} setUserType={setUserType} />
          </div>
        </div>
        <CustomInput
          type={InputType.Text}
          id={InputId.FirstName}
          placeholder={InputPlaceholder.FirstName}
          required={true}
          autoComplete='on'
          {...register('firstName', {
            required: true,
          })}
        />
        <CustomInput
          type={InputType.Text}
          id={InputId.LastName}
          placeholder={InputPlaceholder.LastName}
          required={true}
          autoComplete='on'
          {...register('lastName', {
            required: true,
          })}
        />
        <CustomInput
          type={InputType.Email}
          id={InputId.Email}
          placeholder={InputPlaceholder.Email}
          required={true}
          autoComplete='on'
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+\.\S+$/,
          })}
        />
        <div className='custom-item'>
          <label htmlFor='password' className='custom-label'>
            {InputPlaceholder.CreatePassword}
            <input
              id='password'
              autoComplete='on'
              placeholder={InputPlaceholder.Password}
              type={isPasswordVisible ? InputType.Text : InputType.Password}
              className='custom-input'
              required={true}
              {...register('password', {
                required: true,
              })}
            />
          </label>
          {isPasswordVisible ? (
            <EyeIsOpened onClick={setPassword} className='eye' />
          ) : (
            <EyeIsClosed onClick={setPassword} className='eye' />
          )}
        </div>
        <div className='custom-item'>
          <label htmlFor='passwordConfirmation' className='custom-label'>
            {InputPlaceholder.PasswordConfirmation}
            <input
              id='passwordConfirmation'
              placeholder={InputPlaceholder.Password}
              autoComplete='on'
              type={isPasswordVisible ? InputType.Text : InputType.Password}
              className='custom-input'
              required={true}
              {...register('passwordConfirmation', {
                required: true,
                validate: (input) => input === watch('password'),
              })}
            />
          </label>
          {isPasswordVisible ? (
            <EyeIsOpened onClick={setPassword} className='eye' />
          ) : (
            <EyeIsClosed onClick={setPassword} className='eye' />
          )}
        </div>
        <div className='agree-with-rules'>
          <input id='check-agree' type='checkbox' className='check-agree' />
          <label htmlFor='check-agree'>
            Я согласен с условиями политики обработки персональных данных
          </label>
        </div>
        <input
          type='submit'
          value='Зарегистрироваться'
          className='filled-btn'
        />
        <div className='link-to-auth-page'>
          <span>У вас уже есть аккаунт?</span>
          <NavLink to='/auth'>
            <div className='signin-link'>
              <span>Войти</span>
            </div>
          </NavLink>
        </div>
      </form>
    </section>
  );
};
