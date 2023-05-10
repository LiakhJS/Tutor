import { Authorization } from '../../components/authorization/authorization';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header';
import { TutorAbout } from '../../components/tutor-about';
import './authorization-page.css';

export const AuthorizationPage = () => (
  <div className='wrapper'>
    <Header />
    <main>
      <div className="main-container">
        <TutorAbout />
        <Authorization />
      </div>
    </main>
    <Footer />
  </div>

)
