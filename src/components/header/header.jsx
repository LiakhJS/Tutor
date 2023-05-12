import { ReactComponent as TutorLogo } from "../../assets/icons/tutor.svg";

import { Button } from "../button/button";
import { NavLink } from "react-router-dom";
import { CustomSelectWithOption } from "../custom-select-with-option";
import { SelectId, langCode } from "../../constants/utils";

import "./header.css";

export const Header = () => (
  <header className="header">
    <NavLink to="/auth" className="header-nav">
      <div className="tutor-logo">
        <TutorLogo className="tutor-logo_svg" />
      </div>
    </NavLink>
    <div className="tutor-menu">
      <span>Найти преподавателя</span>
      <span>Стать преподавателем</span>
    </div>
    <div className="lang-auth-reg-btns">
      <div className="lang">
        <CustomSelectWithOption
          id={SelectId.LangCode}
          options={langCode}
          lang="lang"
        />
      </div>
      <NavLink to="/auth">
        <Button type="button" className="empty-btn">
          Войти
        </Button>
      </NavLink>
      <NavLink to="/registration">
        <Button type="button" className="filled-btn">
          Зарегистрироваться
        </Button>
      </NavLink>
    </div>
  </header>
);
