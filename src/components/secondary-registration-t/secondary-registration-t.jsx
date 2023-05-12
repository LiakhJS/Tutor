import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  InputPlaceholder,
  InputType,
  SelectPlaceholder,
  TextareaPlaceholder,
  InputId,
  SelectId,
  TextaeaId,
} from '../../constants/utils.js';
import { langs } from '../../constants/utils.js';
import { levels } from '../../constants/utils.js';
import { CustomInput } from '../custom-input';
import { CustomSelect } from '../custom-select';
import { CustomTextArea } from '../custom-textarea';
import { Button } from '../button/button';
import { UploadWithIcon } from '../upload-with-icon';

import { ReactComponent as RemoveIcon } from '../../assets/icons/remove.svg';
import sertificateImage from '../../assets/icons/sertificate.svg';

import './secondary-registration-t.css';
import '../custom-input/custom-input.css';
import '../../components/button/button.css';

export const SecondaryRegistrationT = ({ signUpTeacher }) => {
  const navigate = useNavigate();
  const userTeacher = useSelector(
    (state) => state.registrationAuthorization.userTeacher
  );
  const userTeacherFirstName = userTeacher.user.first_name;
  const userTeacherLastName = userTeacher.user.last_name;
  const userTeacherEmail = userTeacher.user.email;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data) => {
    signUpTeacher({
      data: {
        date_of_birthday: String(data.dateOfBirth),
        country: String(data.country),
        teaching_languages: [
          {
            language: String(data.lang),
            level: String(data.level),
            description: String(data.description),
            price: String(data.price),
          },
          {
            language: String(data.lang2),
            level: String(data.level2),
            description: String(data.description),
            price: String(data.price2),
          },
        ],
      },
    });
    navigate('/profile-teacher-page');
  };

  return (
    <section className='tutor-secondary-reg'>
      <form
        className='custom-form'
        key='1'
        noValidate={true}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='custom-form_bl'>
          <div className='custom-form_s'>
            <CustomInput
              id={InputId.FirstName}
              type={InputType.Text}
              placeholder={InputPlaceholder.FirstName}
              required={true}
              disabled={true}
              autoComplete='on'
              {...register('firstName', {
                required: true,
                value: `${userTeacherFirstName}`,
                pattern: /^[A-Za-z0-9]+$/,
              })}
            />
            <CustomInput
              id={InputId.LastName}
              type={InputType.Text}
              placeholder={InputPlaceholder.LastName}
              required={true}
              disabled={true}
              autoComplete='on'
              {...register('lastName', {
                required: true,
                value: `${userTeacherLastName}`,
              })}
            />
          </div>
          <div className='custom-form_s'>
            <CustomInput
              id={InputId.Email}
              type={InputType.Email}
              placeholder={InputPlaceholder.Email}
              required={true}
              disabled={true}
              autoComplete='on'
              {...register('email', {
                required: true,
                value: `${userTeacherEmail}`,
              })}
            />
            <CustomInput
              id={InputId.DateOfBirth}
              type={InputType.DateOfBirth}
              placeholder={InputPlaceholder.DateOfBirth}
              required={true}
              autoComplete='on'
              {...register('dateOfBirth', {
                value: '2000-01-01',
                required: true,
              })}
            />
          </div>
          <div className='custom-form_s'>
            <div className='is-not-confirmed'>
              <span>
                Ваш email не подтверждён. Пожалуйста перейдите в почту.
              </span>
              <span>Прислать подтверждение ещё раз</span>
              <div className='remove-icon'>
                <RemoveIcon />
              </div>
            </div>
            <CustomSelect
              id={SelectId.Country}
              placeholder={SelectPlaceholder.ChooseCountry}
              title={SelectPlaceholder.Country}
              required={true}
              autoComplete='on'
              languages={langs}
              {...register('country', {
                required: true,
              })}
            />
          </div>
        </div>
        <div className='tt-lang-bl'>
          <div className='custom-form_s'>
            <CustomSelect
              id={SelectId.Language}
              placeholder={SelectPlaceholder.ChooseLanguage}
              title={SelectPlaceholder.TeachingLanguage}
              required={true}
              autoComplete='on'
              languages={langs}
              {...register('lang', {
                required: true,
              })}
            />
            <CustomSelect
              id={SelectId.Level}
              placeholder={SelectPlaceholder.ChooseLevel}
              title={SelectPlaceholder.Level}
              required={true}
              autoComplete='on'
              levels={levels}
              {...register('level', {
                required: true,
              })}
            />
          </div>
          <div className='custom-form_s'>
            <div className='sert-upload-bl'>
              <h3 className='custom-label'>Загрузите сертификат/диплом</h3>
              <div className='sert-upload'>
                <div className='sert-upload_descr'>
                  <div className='sert-upload_descr_img'>
                    <img src={sertificateImage} alt='sertificate' />
                  </div>
                  <div className='sert-upload_descr_inf'>
                    <span>Sertificat eng. png</span>
                    <span>200 kB</span>
                    <div className='remove-icon'>
                      <RemoveIcon />
                    </div>
                  </div>
                </div>
                <div className='sert-upload_btn'>
                  <UploadWithIcon />
                  <span>
                    Формат JPG, GIF или PNG. <br /> Максимальный размер до 800
                    KB
                  </span>
                </div>
                <Button type='button' className='empty-btn'>
                  Удалить язык
                </Button>
              </div>
            </div>
            <CustomInput
              id={InputId.Price}
              type={InputType.Price}
              placeholder={InputPlaceholder.ChoosePrice}
              title={InputPlaceholder.Price}
              required={true}
              autoComplete='on'
              {...register('price', {
                required: true,
                min: 1,
                pattern: /^[0-9]+$/,
              })}
            />
          </div>
        </div>
        <div className='tt-lang-bl'>
          <div className='custom-form_s'>
            <CustomSelect
              id={SelectId.Language2}
              placeholder={SelectPlaceholder.ChooseLanguage}
              title={SelectPlaceholder.TeachingLanguage}
              required={true}
              autoComplete='on'
              languages={langs}
              {...register('lang2', {
                required: true,
              })}
            />
            <CustomSelect
              id={SelectId.Level}
              placeholder={SelectPlaceholder.ChooseLevel}
              title={SelectPlaceholder.Level}
              required={true}
              autoComplete='on'
              levels={levels}
              {...register('level2', {
                required: true,
              })}
            />
          </div>
          <div className='custom-form_s'>
            <div className='sert-upload-bl'>
              <h3 className='custom-label'>Загрузите сертификат/диплом</h3>
              <div className='sert-upload'>
                <div className='sert-upload_btn'>
                  <UploadWithIcon />
                  <span>
                    Формат JPG, GIF или PNG. <br /> Максимальный размер до 800
                    KB
                  </span>
                </div>
                <Button type='button' className='empty-btn'>
                  Удалить язык
                </Button>
              </div>
            </div>
            <CustomInput
              id={InputId.Price2}
              placeholder={InputPlaceholder.ChoosePrice}
              title={InputPlaceholder.Price}
              type={InputType.Price}
              required={true}
              autoComplete='on'
              {...register('price2', {
                required: true,
                pattern: /^[0-9]+$/,
                min: 1,
              })}
            />
          </div>
        </div>
        <div className='add-lang'>
          <UploadWithIcon />
          <span>Добавить язык преподавания</span>
        </div>
        <div className='prof-skills'>
          <CustomTextArea
            id={TextaeaId.ProfSkills}
            placeholder={TextareaPlaceholder.EnterText}
            title={TextareaPlaceholder.DescribeYourSkills}
            required={true}
            autoComplete='on'
            {...register('description', { required: true, min: 1 })}
          />
          <div className='next-btn'>
            <input type='submit' value='Далее' className='filled-btn next' />
          </div>
        </div>
      </form>
    </section>
  );
};
