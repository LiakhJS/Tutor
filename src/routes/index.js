import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthorizationPage } from "../pages/authorization-page/authorization-page";
import { RegistrationPage } from "../pages/registration-page";
import { StudentRegistration } from "../pages/student-registration";
import { TeacherRegistration } from "../pages/teacher-registration";
import { ProfileTeacherPage } from "../pages/profile-teacher-page/profile-teacher-page";
import { ProfileStudentPage } from "../pages/profile-student-page";
import { ProfilePage } from "../pages/profile-page/profile-page";

export const Pages = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/teacher-registration" element={<TeacherRegistration />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/profile-teacher-page" element={<ProfileTeacherPage />} />
        <Route path="/profile-student-page" element={<ProfileStudentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </HashRouter>
  );
};
