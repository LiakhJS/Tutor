import './header.css';
import { ReactComponent as TutorLogo } from '../../assets/icons/tutor.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/direction-down.svg';
import { Button } from '../button/button';
import { NavLink } from 'react-router-dom';


export const Header = () => (
  <header className='header'>
    <div className="tutor-logo">
      <TutorLogo className="tutor-logo_svg"/>
    </div>
    <div className="tutor-menu">
      <span>Найти преподавателя</span>
      <span>Стать преподавателем</span>
    </div>
    <div className="lang-auth-reg-btns">
      <div className="lang">
        <span>ru</span>
        <div className="lang_icon">
        <ArrowDown className="lang_icon_svg"/>
        </div>
      </div>
      <NavLink to='/auth'>
     <Button type="button" className="empty-btn">Войти</Button>
     </NavLink>
     <NavLink to='/registration'>
     <Button type="button" className="filled-btn">Зарегистрироваться</Button>
      </NavLink>
      </div>

  </header>
);




