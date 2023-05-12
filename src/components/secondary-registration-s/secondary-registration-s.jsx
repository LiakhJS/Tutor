import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { CustomInput } from "../custom-input";
import { CustomSelect } from "../custom-select";
import { Button } from "../button/button";
import { UploadWithIcon } from "../upload-with-icon";
import { CustomTextArea } from "../custom-textarea";
import { langs } from "../../constants/utils.js";
import { levels } from "../../constants/utils.js";
import { ReactComponent as RemoveIcon } from "../../assets/icons/remove.svg";

import {
  InputPlaceholder,
  InputType,
  SelectPlaceholder,
  TextareaPlaceholder,
  InputId,
  SelectId,
  TextaeaId,
} from "../../constants/utils.js";

import "../custom-input/custom-input.css";
import "../../components/button/button.css";
import "../custom-input/custom-input.css";
import "../../components/button/button.css";
import "../secondary-registration-t/secondary-registration-t.css";
import "./secondary-registration-s.css";

export const SecondaryRegistrationS = ({ signUpStudent }) => {
  const navigate = useNavigate();
  const userStudent = useSelector(
    (state) => state.registrationAuthorization.userStudent
  );
  const userStudentFirstName = String(userStudent.user.first_name);
  const userStudentLastName = userStudent.user.last_name;
  const userStudentEmail = userStudent.user.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    signUpStudent({
      data: {
        date_of_birthday: String(data.dateOfBirth),
        learning_languages: [
          {
            language: String(data.lang),
            level: String(data.level),
            description: String(data.description),
          },
        ],
      },
    });
    navigate("/profile-student-page");
  };

  return (
    <section className="tutor-secondary-reg">
      <form
        className="custom-form"
        key="1"
        noValidate={true}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="custom-form_bl">
          <div className="custom-form_s">
            <CustomInput
              id={InputId.FirstName}
              type={InputType.Text}
              placeholder={InputPlaceholder.FirstName}
              required={true}
              disabled={true}
              autoComplete="on"
              {...register("firstName", {
                value: `${userStudentFirstName}`,
                required: true,
              })}
            />
            <CustomInput
              id={InputId.LastName}
              type={InputType.Text}
              placeholder={InputPlaceholder.LastName}
              required={true}
              disabled={true}
              autoComplete="on"
              {...register("lastName", {
                value: `${userStudentLastName}`,
                required: true,
              })}
            />
          </div>
          <div className="custom-form_s">
            <CustomInput
              id={InputId.Email}
              type={InputType.Email}
              placeholder={InputPlaceholder.Email}
              required={true}
              disabled={true}
              autoComplete="on"
              {...register("email", {
                value: `${userStudentEmail}`,
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />
            <CustomInput
              id={InputId.DateOfBirth}
              type={InputType.DateOfBirth}
              placeholder={InputPlaceholder.DateOfBirth}
              required={true}
              autoComplete="on"
              {...register("dateOfBirth", {
                value: "2000-01-01",
                required: true,
              })}
            />
          </div>
          <div className="custom-form_s">
            <div className="is-not-confirmed ">
              <span>
                Ваш email не подтверждён. Пожалуйста перейдите в почту.
              </span>
              <span>Прислать подтверждение ещё раз</span>
              <div className="remove-icon">
                <RemoveIcon />
              </div>
            </div>
            <span className="hidden-bl" />
          </div>
        </div>
        <div className="st-lang-bl ">
          <div className="custom-form_s">
            <CustomSelect
              id={SelectId.Language}
              placeholder={SelectPlaceholder.ChooseLanguage}
              title={SelectPlaceholder.LearningLanguage}
              required={true}
              autoComplete="on"
              languages={langs}
              {...register("lang", {
                required: true,
              })}
            />
            <CustomSelect
              id={SelectId.Level}
              placeholder={SelectPlaceholder.ChooseLevel}
              title={SelectPlaceholder.Level}
              required={true}
              autoComplete="on"
              levels={levels}
              {...register("level", {
                required: true,
              })}
            />
          </div>
          <CustomTextArea
            id={TextaeaId.ProfSkills}
            placeholder={TextareaPlaceholder.EnterText}
            title={TextareaPlaceholder.Goal}
            required={true}
            autoComplete="on"
            {...register("description", { required: true, min: 1 })}
          />
          <Button type="button" className="empty-btn">
            Удалить язык
          </Button>
        </div>
        <div className="add-lang">
          <UploadWithIcon />
          <span>Добавить язык для изучения</span>
        </div>
        <div className="next-btn">
          <input type="submit" value="Далее" className="filled-btn next" />
        </div>
      </form>
    </section>
  );
};
