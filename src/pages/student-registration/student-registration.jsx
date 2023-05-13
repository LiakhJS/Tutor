import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getStudentThunk,
  signUpStudentThunk,
} from "../../store/regAndAutSlice";

import { Footer } from "../../components/footer/footer";
import { SecondaryRegistrationS } from "../../components/secondary-registration-s";
import { FileUploadSingle } from "../../components/upload/upload";
import { Button } from "../../components/button/button";
import { HeaderAuthorized } from "../../components/header-authorized";
import { Error } from "../../components/error/error";
import { Loader } from "../../components/loader/loader";
import unknownUser from "../../assets/icons/unknown-user.svg";

import "./student-registration.css";
import "../../components/button/button.css";
import "../teacher-registration/teacher-registration.css";

export const StudentRegistration = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const formData = new FormData();
  const signUpBaseStatus = useSelector(
    (state) => state.registrationAuthorization.signUpBaseStatus
  );
  const getStudentStatus = useSelector(
    (state) => state.registrationAuthorization.getStudentStatus
  );

  const signUpStudent = (data) => {
    dispatch(signUpStudentThunk(data));
  };

  useEffect(() => {
    if (signUpBaseStatus === "resolved") {
      dispatch(getStudentThunk());
    }
  }, [dispatch, signUpBaseStatus]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      formData.append("files", file);
      setFile(null);
    }
  }, [dispatch, file, formData]);

  return (
    <div className="wrapper">
      <HeaderAuthorized />
      <main>
        {(signUpBaseStatus === "loading" || getStudentStatus === "loading") && (
          <Loader />
        )}
        {signUpBaseStatus === "failed" && <Error />}
        {signUpBaseStatus === "resolved" && getStudentStatus === "resolved" && (
          <div className="main-container sec-reg">
            <section className="profile_ava">
              <div className="profile_ava_picture">
                <img src={unknownUser} alt="profile-ava" />
              </div>
              <div className="profile-ava_change">
                <div className="profile-ava_change_btns">
                  <FileUploadSingle handleFileChange={handleFileChange} />
                  <Button type="button" className="empty-btn">
                    Удалить
                  </Button>
                </div>
                <span>
                  Формат JPG, GIF или PNG. Максимальный размер до 800 KB
                </span>
              </div>
            </section>
            <SecondaryRegistrationS signUpStudent={signUpStudent} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
