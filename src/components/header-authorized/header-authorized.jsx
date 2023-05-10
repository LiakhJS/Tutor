import { ReactComponent as TutorLogo } from '../../assets/icons/tutor.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/direction-down.svg';
import {ReactComponent as UserAvaIcon} from '../../assets/icons/user-ava-icon.svg';
import {ReactComponent as MailIcon} from '../../assets/icons/mail.svg';
import {ReactComponent as NotificationIcon} from '../../assets/icons/notification.svg';

import { Button } from '../button/button';
import { NavLink } from 'react-router-dom';
import { currency } from '../utils';
import { SelectId } from '../utils';
import { langCode } from '../utils';
import './header-authorized.css';
import { CustomSelectWithOption } from '../custom-select-with-option';

export const HeaderAuthorized = () => (
  <header className='header'>
    <NavLink to='/auth'>
      <div className="tutor-logo">
        <TutorLogo className="tutor-logo_svg" />
      </div>
    </NavLink>
    <div className="tutor-menu sec-reg">
      <div className="tutor-menu_balance">
        <div className="balance_state custom-input">
          <span>Баланс ($)</span>
          <span>50</span>
        </div>
        <div className="balance_currency">

          <CustomSelectWithOption
            id={SelectId.Currency}
            options={currency}
          />
        </div>
        <div className="balance_refill">
          <Button type='button' className='empty-btn'>Пополнить</Button>
        </div>
      </div>
      <div className="tutor-menu_items">
        <span>Мои уроки</span>
        <span>Найти преподавателя</span>
        <span>Пригласить друга</span>
      </div>
    </div>
    <div className="lang-auth-reg-btns authorized">
      <div className="lang">

        <CustomSelectWithOption
          id={SelectId.LangCode}
          options={langCode}
          lang='lang'
        />
      </div>
      <div className="notifications">
        <div className="notifications_news"> <NotificationIcon className="notifications_news_icon" />
          <span className="notifications_mail_counter">4</span>
        </div>
        <div className="notifications_mail">
        <MailIcon className="notifications_mail_icon"/>
          <span className="notifications_mail_counter">2</span></div>
        <div className="notifications_ava">
          <UserAvaIcon className="notifications_ava_icon"/>
        </div>
      </div>
    </div>

  </header>
);




