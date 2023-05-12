import { ReactComponent as TutorBackground } from '../../assets/undraw_online_learning_re_qw08.svg';

import './tutor-about.css';

export const TutorAbout = () => (
  <section className='tutor-about'>
    <div className='tutor-about_title'>
      <h1>TUTOR</h1> &mdash; платформа для онлайн-
      <wbr />
      обучения иностранным языкам
    </div>
    <div className='tutor-about_item'>
      <div>
        <span>Занимайтесь онлайн в удобное время суток из любого места </span>
      </div>
      <div>
        <span>Выбирайте опытных преподавателей со всего мира</span>
      </div>
    </div>
    <div className='tutor-about_back'>
      <TutorBackground
        className='tutor-about_back_svg'
        viewBox='48 0 500 320'
      />
    </div>
  </section>
);
