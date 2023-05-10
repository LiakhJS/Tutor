
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import { CustomInput } from '../../components/custom-input';
import { InputId, InputMessage, InputPlaceholder, InputType } from '../../components/utils.js';
import { ReactComponent as CheckedIcon } from '../../images/CheckCircle.svg';
import { ReactComponent as EyeIsClosed } from '../../assets/icons/eye-disable.svg';
// import { ReactComponent as EyeIsClosed } from '../../images/Icon_eye_isclosed.svg';
import { ReactComponent as EyeIsOpened } from '../../images/Icon_eye_isopened.svg';
import { ReactComponent as LogInArrow } from '../../images/log-in-arrow.svg';

import './registration.css';
import '../custom-input/custom-input.css';
import '../../components/button/button.css';
import { signUpBaseThunk } from '../../redux/registrationAndAuthorization';
import { useDispatch } from 'react-redux';
import { ChooseUserInput } from '../choose-user-input';

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const btnTitle = step === 1 ? 'Следующий шаг' : step === 2 ? 'Последний шаг' : 'Зарегистрироваться';
  const successOrNo = 'Регистрация успешна';
  const successOrNoMessage = 'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль';
  const btnResultTitle = 'Вход';

  const setHandleStep = () => {
    setStep(step + 1);
  };
  const setPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  // const baseUrl = 'http://212.193.62.231:8080/auth/signup/base'
  // const getReg = async (data) => {
  //     await axios
  //             .post(baseUrl, {
  //                 'email': String(data.email),      
  //                 'password': String(data.password),
  //                 'first_name': String(data.firstName),
  //                 'last_name': String(data.lastName),
  //                 'device': 'postman',
  //                 'user_type': 0                 
  //             }).then((response) => {
  //                 console.log(response.data.access_token)   
  //                 const token = response.data.access_token;
  //                 Cookies.set('currentToken', token);
  //             }).catch((err) => {
  //                 console.log(err);              
  //             })
  // }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data) => {

    dispatch(signUpBaseThunk({
      data: {
        'email': String(data.email),
        'password': String(data.password),
        'first_name': String(data.firstName),
        'last_name': String(data.lastName),
        'device': 'postman',
        'user_type': 0
      }

    }));
setTimeout( navigate('/student-registration'), 5000);
   
  }


  return (
    <section className="tutor-reg">

      <form className='custom-form' key='1' noValidate={true} onSubmit={handleSubmit(onSubmit)}>
        <div className='reg-title-and-user-type'>
          <h1 className='custom-title'>Регистрация</h1>
          <div className='user-type-bl'>
            <h3>Зарегистрироваться как:</h3>

            <ChooseUserInput />
          </div>
        </div>

        <CustomInput
          type={InputType.Text}
          id={InputId.FirstName}
          placeholder={InputPlaceholder.FirstName}
          // message={InputMessage.FirstName}
          // errors={errors.firstName}
          required={true}
          autoComplete='on'
          {...register('firstName', {
            required: true,
            pattern: /^[A-Za-z0-9]+$/,
          })}
        />
        <CustomInput
          type={InputType.Text}
          id={InputId.LastName}
          placeholder={InputPlaceholder.LastName}
          // message={InputMessage.LastName}
          // errors={errors.lastName}
          required={true}
          autoComplete='on'
          {...register('lastName', {
            required: true,
            pattern: /^[A-Za-z0-9]+$/,
          })}
        />
        <CustomInput
          type={InputType.Email}
          id={InputId.Email}
          placeholder={InputPlaceholder.Email}
          // message={InputMessage.Email}
          // errors={errors.email}
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
              {...register(
                'password',
                {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                })}
            />

          </label>
          {isPasswordVisible ? (


            <EyeIsOpened onClick={setPassword} className='eye' />

          ) : (


            <EyeIsClosed onClick={setPassword} className='eye' />

          )}
          {/* {errors.password && <span className='field_invalid'>{InputMessage.Password}</span>}
          {!errors.password && <span className='field_valid'>{InputMessage.Password}</span>} */}
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

              {...register(
                'passwordConfirmation',
                {
                  required: true,
                  validate: (input) => input === watch('password')
                })}
            />

          </label>
          {isPasswordVisible ? (<EyeIsOpened onClick={setPassword} className='eye' />) : (<EyeIsClosed onClick={setPassword} className='eye' />)}
          {/* {errors.passwordConfirmation && <span className='field_invalid'>Пароли не совпадают</span>}
          {(!errors.passwordConfirmation) && <span className='field_valid' />}  */}
        </div>





  
        <div className="agree-with-rules">
        <input id="check-agree" type="checkbox" className='check-agree'/>
  <label htmlFor="check-agree">Я согласен с условиями политики обработки персональных данных</label>
        </div>
            <input type='submit' value='Зарегистрироваться' className='filled-btn' />
           
          

          <div className="link-to-auth-page">
            
            <span>У вас уже есть аккаунт?</span>
            <NavLink to='/auth'>
                <div className='signin-link'>
                  <span>Войти</span>
                </div>
              </NavLink>
          </div>
      </form>
    

      
    </section>
  )
}
