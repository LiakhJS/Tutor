
// import axios from 'axios';
import { useEffect } from 'react';
import './teacher-registration.css';
import '../../components/button/button.css';
import { signUpTeacherThunk, getTeacherThunk } from '../../redux/registrationAndAuthorization';
import { useDispatch } from 'react-redux';

import { Footer } from '../../components/footer/footer';
import unknownUser from '../../assets/icons/unknown-user.svg';
import { Button } from '../../components/button/button';
import { useState } from 'react';
import { FileUploadSingle } from '../../components/upload/upload';
import { SecondaryRegistrationT } from '../../components/secondary-registration-t';
import { HeaderAuthorized } from '../../components/header-authorized';

// import Cookies from 'js-cookie';
export const TeacherRegistration = () => {

  // const token = Cookies.get('currentToken');

  const dispatch = useDispatch();
  // const baseUrl2 = 'http://212.193.62.231:8080/auth/signup/teacher'
  // const setAuthToken = token => {
  //   if (token) {
  //     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  //   }
  //   else
  //     delete axios.defaults.headers.common.Authorization;
  // }
  // const baseUrl3 = 'http://212.193.62.231:8080/teacher'
  // const getReg3 = async () => {
  //   await axios
  //     .get(baseUrl3, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`,
  //       }
  //     }).then((data) => {
  //       console.log(data)
  //     }).catch((err) => {
  //       console.log(err);

  //     })
  // }
  const signUpTeacher = (data) => {
    dispatch(signUpTeacherThunk(data)
    );
    setTimeout(() => dispatch(getTeacherThunk()), 1000);




  }
  // const goF = async () => {
  //   await axios
  //     .post(baseUrl2,
  //       {
  //         "date_of_birthday": "2020-10-15",
  //         "country": "Minsk",
  //         "teaching_languages": [
  //           {
  //             "language": "English",
  //             "level": "A1",
  //             "description": "qweqweqwe",
  //             "price": 200.0
  //           },
  //           {
  //             "language": "English",
  //             "level": "A2",
  //             "description": "qweqweqwe",
  //             "price": 200.0
  //           }
  //         ]
  //       }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`,

  //       }
  //     }).then((response) => {
  //       // setAuthToken(token);
  //       console.log(response)
  //       console.log(token)

  //     }).catch((err) => {
  //       console.log(err);
  //       console.log(token)
  //     })
  // }
  useEffect(() => {
    dispatch(getTeacherThunk())
  });
  const formData = new FormData();
  const [file, setFile] = useState(null);
  // const pictureLoadingStatus = useSelector((state) => state.bookComment.pictureLoadingStatus);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);

  }

  useEffect(() => {
    if (file) {
      formData.append('files', file);
      // dispatch(setPictureThunk(formData));
      console.log(file);
      setFile(null);
    }
  }, [dispatch, file, formData])

  return (

    <div className='wrapper'>
<HeaderAuthorized />
      <main>
        <div className="main-container sec-reg">
          <section className="profile_ava">

            <div className="profile_ava_picture" >
              <img src={unknownUser} alt='profile-ava' />
            </div>
            <div className="profile-ava_change">

              <div className="profile-ava_change_btns">
                <FileUploadSingle handleFileChange={handleFileChange} />
                <Button type='button' className='empty-btn'>Удалить</Button>
              </div>
              <span>Формат JPG, GIF или PNG. Максимальный размер до 800 KB</span>
            </div>
          </section>
          <SecondaryRegistrationT signUpTeacher={signUpTeacher} handleFileChange={handleFileChange}/>

        </div>
        
       
      </main>
      <Footer />
    </div>
    // <div className='container__log'>
    //   <input type='submit' value='next' className='reserv-btn' onClick={signUpTeacher} />
    //   <div>
    //     height</div>
    // </div >
  )
}
