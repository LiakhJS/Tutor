import { ReactComponent as TutorLogo } from '../../assets/icons/tutor.svg';
import './footer.css';

export const Footer = () => (
  <footer>
    <div className="tutor-logo">
      <TutorLogo className="tutor-logo_svg" />
    </div>
    <nav>
      <div className="nav-block">
        <div className="about-company">
          <h2 className="about-company_title">О компании</h2>
          <ul>
            <li>О нас</li>
            <li>Найти репетитора</li>
            <li>Стать преподавателем</li>
            <li>Задать вопрос</li>
          </ul>
        </div>
        <span>Условия использования</span>
      </div>
      <div className="nav-block">
        <div className="teachers">
          <h2 className="teachers_title">Преподаватели</h2>
          <ul>
            <li>
              <ul>
                <li>Английского</li>
                <li>Испанского </li>
                <li>Немецкого </li>
                <li>Китайского</li>
                <li>Русского</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>Португальского</li>
                <li>Иврита</li>
                <li>Японского</li>
                <li>Греческого</li>
                <li>Арабского</li>
              </ul>
            </li>
          </ul>
          <span className="more-lang">Ещё</span>
        </div>
        <span>Политика конфиденциальности</span>
      </div>

      <div className="nav-block">
        <div className="contacts">
          <h2 className="contacts_title">Связаться с нами</h2>
          <span>Email: asktutor24@gmail.com</span>
        </div>
        <span>&copy; 2021–2022 All rights reserved</span>
      </div>

    </nav>

  </footer>
);
