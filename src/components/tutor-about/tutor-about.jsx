import './tutor-about.css';
import { ReactComponent as TutorBackground } from '../../assets/undraw_online_learning_re_qw08.svg';

export const TutorAbout = () => (

    <section className="tutor-about">
        <div className='tutor-about_title'>
            <div className='tutor-about_title_1'>
                <h1>TUTOR</h1> <span> &mdash; платформа для онлайн-</span> </div>
            <div className='tutor-about_title_2'>
                обучения иностранным языкам</div>
        </div>
        <div className="tutor-about_item">
            <span>Занимайтесь онлайн в удобное время суток из любого места </span>
            <span>Выбирайте опытных преподавателей со всего мира</span>

        </div>
        <div className="tutor-about_back">
            <TutorBackground className="tutor-about_back_svg" viewBox='48 0 500 320' />
        </div>
    </section>

)

