import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header';
import { Registration } from '../../components/registration/registration';
import { TutorAbout } from '../../components/tutor-about';

import '../authorization-page/authorization-page.css';
import './registration-page.css';

export const RegistrationPage = () => (
  <div className='wrapper'>
    <Header />
    <main>
      <div className='main-container'>
        <TutorAbout />
        <Registration />
      </div>
    </main>
    <Footer />
  </div>
);
