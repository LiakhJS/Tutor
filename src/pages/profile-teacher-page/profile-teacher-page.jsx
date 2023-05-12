import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherThunk } from "../../store/regAndAutSlice";
import Cookies from "js-cookie";

import { Button } from "../../components/button/button";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import { Error } from "../../components/error/error";
import { Loader } from "../../components/loader/loader";

import "../profile-page/profile-page.css";
import "./profile-teacher-page.css";

export const ProfileTeacherPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpTeacherStatus = useSelector(
    (state) => state.registrationAuthorization.signUpTeacherStatus
  );
  const getTeacherStatus = useSelector(
    (state) => state.registrationAuthorization.getTeacherStatus
  );
  const userTeacher = useSelector(
    (state) => state.registrationAuthorization.userTeacher
  );

  const logOut = () => {
    Cookies.remove("token");
    navigate("/auth");
  };

  useEffect(() => {
    if (signUpTeacherStatus === "resolved") {
      dispatch(getTeacherThunk());
    }
  }, [dispatch, signUpTeacherStatus]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        {(signUpTeacherStatus === "loading" ||
          getTeacherStatus === "loading") && <Loader />}
        {signUpTeacherStatus === "failed" && <Error />}
        {signUpTeacherStatus === "resolved" &&
          getTeacherStatus === "resolved" && (
            <div className="user">
              <div className="user_type">Teacher</div>
              <div className="user_inf">
                <div className="user_inf_title">ID</div>
                <div className="user_inf_value">{userTeacher.user.id}</div>
              </div>
              <div className="user_inf">
                <div className="user_inf_title">Имя</div>
                <div className="user_inf_value">
                  {userTeacher.user.first_name}
                </div>
              </div>
              <div className="user_inf">
                <div className="user_inf_title">Фамилия</div>
                <div className="user_inf_value">
                  {userTeacher.user.last_name}
                </div>
              </div>
              <div className="user_inf">
                <div className="user_inf_title">Email</div>
                <div className="user_inf_value">{userTeacher.user.email}</div>
              </div>
              <div className="user_inf">
                <div className="user_inf_title">Verify email</div>
                <div className="user_inf_value">
                  {String(userTeacher.user.is_verify_email)}
                </div>
              </div>
              <div className="user_inf">
                <div className="user_inf_title">Дата Рождения</div>
                <div className="user_inf_value">
                  {userTeacher.user.date_of_birthday ||
                    "дата рождения не выбрана"}
                </div>
              </div>
              <div className="user_inf">
                <div className="user_inf_title">Страна</div>
                <div className="user_inf_value">
                  {userTeacher.user.country || "старана не выбрана"}
                </div>
              </div>
              {userTeacher.teaching_languages.map((item, index) => (
                <div className="user_inf" key={item.language}>
                  <div className="user_inf_title">
                    {index + 1} язык преподавания
                  </div>
                  <div className="user_inf_value">
                    {item.language}, {item.level}, {item.price} &#8364; ,{" "}
                    {item.description}
                  </div>
                </div>
              )) || null}
              <Button type="button" className="empty-btn" onClick={logOut}>
                Log out
              </Button>
            </div>
          )}
      </main>
      <Footer />
    </div>
  );
};
