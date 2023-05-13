import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserThunk } from "../../store/regAndAutSlice";
import { Button } from "../../components/button/button";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import { Error } from "../../components/error/error";
import { Loader } from "../../components/loader/loader";

import Cookies from "js-cookie";

import "./profile-page.css";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useSelector(
    (state) => state.registrationAuthorization.authorizationStatus
  );
  const getUserStatus = useSelector(
    (state) => state.registrationAuthorization.getUserStatus
  );
  const userData = useSelector(
    (state) => state.registrationAuthorization.userData
  );

  const logOut = () => {
    Cookies.remove("token");
    navigate("/auth");
  };

  useEffect(() => {
    if (authorizationStatus === "resolved" || Cookies.get("token") !== null) {
      dispatch(getUserThunk());
    }
  }, [dispatch, authorizationStatus]);

  return (
    <div className="wrapper">
      <Header />

      <main>
        {(authorizationStatus === "loading" || getUserStatus === "loading") && (
          <Loader />
        )}
        {authorizationStatus === "failed" && getUserStatus === "failed" && (
          <Error />
        )}
        {getUserStatus === "resolved" && (
          <div className="user">
            <div className="user_type">User</div>
            <div className="user_inf">
              <div className="user_inf_title">Имя</div>
              <div className="user_inf_value">{userData.first_name}</div>
            </div>
            <div className="user_inf">
              <div className="user_inf_title">Фамилия</div>
              <div className="user_inf_value">{userData.last_name}</div>
            </div>
            <div className="user_inf">
              <div className="user_inf_title">Email</div>
              <div className="user_inf_value">{userData.email}</div>
            </div>
            <div className="user_inf">
              <div className="user_inf_title">Verify email</div>
              <div className="user_inf_value">
                {String(userData.is_verify_email)}
              </div>
            </div>
            <div className="user_inf">
              <div className="user_inf_title">Дата Рождения</div>
              <div className="user_inf_value">
                {userData.date_of_birthday || "дата рождения не выбрана"}
              </div>
            </div>
            <div className="user_inf">
              <div className="user_inf_title">Страна</div>
              <div className="user_inf_value">
                {userData.country || "страна не выбрана"}
              </div>
            </div>
            <div className="user_inf">
              <div className="user_inf_title">Аватар</div>
              <div className="user_inf_value">
                {userData.photo || "фото не выбрано"}
              </div>
            </div>
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
