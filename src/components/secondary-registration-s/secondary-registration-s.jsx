
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import { CustomInput } from '../custom-input';


import { ReactComponent as RemoveIcon} from '../../assets/icons/remove.svg';

import { InputPlaceholder, InputType, SelectPlaceholder, TextareaPlaceholder, InputId, SelectId, TextaeaId } from '../utils.js';

import sertificateImage from '../../assets/icons/eye-disable.svg';

import '../custom-input/custom-input.css';
import '../../components/button/button.css';
import { useDispatch } from 'react-redux';
import { CustomSelect } from '../custom-select';
import { Button } from '../button/button';
import { UploadWithIcon } from '../upload-with-icon';
import { CustomTextArea } from '../custom-textarea';
import { langs } from '../utils.js';
import { levels } from '../utils.js';

import '../custom-input/custom-input.css';
import '../../components/button/button.css';
import '../secondary-registration-t/secondary-registration-t.css';
import './secondary-registration-s.css';


export const SecondaryRegistrationS = ({ signUpStudent }) => {
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
    signUpStudent({
      data: {

        "date_of_birthday": String(data.dateOfBirth),
        "learning_languages": [
          {
            "language": String(data.lang),
            "level": String(data.level),
            "description": String(data.description),
          },
          {
            "language": String(data.lang2),
            "level": String(data.level2),
            "description": String(data.description),
          }
        ]

      }

    });
    setTimeout(navigate('/profile'), 5000);

  }


  return (
    <section className="tutor-secondary-reg">

      <form className='custom-form' key='1' noValidate={true} onSubmit={handleSubmit(onSubmit)}>
        <div className="custom-form_bl">
          <div className='custom-form_s'>
            <CustomInput
              id={InputId.FirstName}
              type={InputType.Text}
              placeholder={InputPlaceholder.FirstName}
              required={true}
              autoComplete='on'
              {...register('firstName', {
                required: true,
                pattern: /^[A-Za-z0-9]+$/,
              })}
            />
            <CustomInput
              id={InputId.LastName}
              type={InputType.Text}
              placeholder={InputPlaceholder.LastName}
              required={true}
              autoComplete='on'
              {...register('lastName', {
                required: true,
                pattern: /^[A-Za-z0-9]+$/,
              })}
            />
          </div>
          <div className='custom-form_s'>
            <CustomInput
              id={InputId.Email}
              type={InputType.Email}
              placeholder={InputPlaceholder.Email}
              required={true}
              autoComplete='on'
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />

            <CustomInput
              id={InputId.DateOfBirth}
              type={InputType.DateOfBirth}
              placeholder={InputPlaceholder.DateOfBirth}
              required={true}
              autoComplete='on'
              {...register('dateOfBirth', {
                value: '2000-01-01', required: true
              })}
            />
          </div>
          <div className='custom-form_s'>
            <div className="is-not-confirmed ">
              <span>
                Ваш email не подтверждён. Пожалуйста перейдите в почту.
              </span>
              <span>
                Прислать подтверждение ещё раз
              </span>
              <div className='remove-icon'>
                <RemoveIcon />
              </div>
            </div>
            <span className='hidden-bl'/>

          </div>
        </div>


        <div className='st-lang-bl '>
          <div className='custom-form_s'>
            <CustomSelect
              id={SelectId.Language}
              placeholder={SelectPlaceholder.ChooseLanguage}
              title={SelectPlaceholder.LearningLanguage}
              required={true}
              autoComplete='on'

              languages={langs}
              {...register('lang', {
                required: true
              })} />
            <CustomSelect
              id={SelectId.Level}
              placeholder={SelectPlaceholder.ChooseLevel}
              title={SelectPlaceholder.Level}
              required={true}
              autoComplete='on'
              levels={levels}

              {...register('level', {
                required: true
              })} />
          </div>



          <CustomTextArea
            id={TextaeaId.ProfSkills}
            placeholder={TextareaPlaceholder.EnterText}
            title={TextareaPlaceholder.Goal}
            required={true}
            autoComplete='on'
            {...register("description", { required: true, min: 1 })} />

          <Button type='button' className='empty-btn'>Удалить язык</Button>
        </div>

        <div className="add-lang">
          <UploadWithIcon />
          <span>Добавить язык для изучения</span>

        </div>

        <div className="next-btn">
          <input type='submit' value='Далее' className='filled-btn next' />
        </div>



      </form>



    </section >
  )
}
