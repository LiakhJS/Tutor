import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Authorization } from '../../components/authorization/authorization';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header';
import { TutorAbout } from '../../components/tutor-about';
import { Loader } from '../../components/loader';

import Cookies from 'js-cookie';

import './authorization-page.css';

export const AuthorizationPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get('token') != null) {
      navigate('/profile');
    }
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className='wrapper'>
      <Header />
      <main>
        <div className='main-container'>
          <TutorAbout />
          <Authorization />
        </div>
      </main>
      <Footer />
    </div>
  );
};
