import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authorizationThunk } from "../../store/regAndAutSlice";
import { CustomInput } from "../../components/custom-input";
import { InputId, InputPlaceholder, InputType } from "../../constants/utils.js";
import { ReactComponent as EyeIsClosed } from "../../assets/icons/eye-disable.svg";
import { ReactComponent as EyeIsOpened } from "../../assets/icons/Icon-eye-isopened.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/socials-facebook.svg";
import { ReactComponent as TwitterkIcon } from "../../assets/icons/socials-twitter.svg";
import { ReactComponent as GoogleIcon } from "../../assets/icons/socials-google.svg";

import "./authorization.css";
import "../../components/button/button.css";

export const Authorization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const setPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(
      authorizationThunk({
        data: {
          email: data.email,
          password: data.password,
          device: "postman",
        },
      })
    );
    navigate("/profile");
  };

  return (
    <section className="tutor-auth">
      <form
        className="custom-form auth"
        noValidate={true}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="custom-title">Вход </h1>
        <CustomInput
          type={InputType.Text}
          id={InputId.Login}
          placeholder={InputPlaceholder.Email}
          errors={errors.password || errors.identifier}
          required={true}
          autoComplete="on"
          {...register("email", { required: true })}
        />
        <div className="custom-item">
          <label htmlFor="password" className="custom-label">
            {InputPlaceholder.Password}
            <input
              id={InputId.Password}
              autoComplete="on"
              type={isPasswordVisible ? InputType.Text : InputType.Password}
              className="custom-input"
              placeholder={InputPlaceholder.Password}
              required={true}
              {...register("password", {
                required: true,
              })}
            />
          </label>
          {isPasswordVisible ? (
            <EyeIsOpened onClick={setPassword} className="eye" />
          ) : (
            <EyeIsClosed onClick={setPassword} className="eye" />
          )}
        </div>
        <div className="btn-and-link-to-reg-page">
          <input type="submit" value="Войти" className="filled-btn" />
          <div className="link-to-reg-page">
            <span className="signup-question">Нет учётной записи?</span>
            <NavLink to="/registration">
              <div className="signup-link">
                <span>Зарегистрироваться</span>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="social-links">
          <span>или</span>
          <span>Войдите с помощью</span>
          <div className="social-links_bl">
            <div className="facebook">
              <FacebookIcon className="facebook_icon" />
            </div>
            <div className="twitter">
              <TwitterkIcon className="twitter_icon" />
            </div>
            <div className="google">
              <GoogleIcon className="google_icon" />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
