import Auth from "../pages/Auth/auth";
import User_user from "../pages/Users/user";
import User_questionnaire from "../pages/Users/questionnaire";
import Dashboard from "../components/Dashboard/dashboard";
import Settings from "../components/Settings/settings";
import UserDetail_Page from "../pages/UserDetail/userDetail";
import Course from "../pages/Course/course";
import Course_module from "../pages/Course/course_module";
import Course_block from "../pages/Course/course_block";
import Course_lesson from "../pages/Course/course_lesson";
import Course_game from "../pages/Course/course_game";
import Mentors from "../pages/Mentors/mentors";
import MentorDetail_Page from "../pages/MentorDetail/mentorDetail";
import LessonMap_Page from "../pages/MainBlocks/LessonMap";
import Dictionary_Page from "../pages/MainBlocks/Dictionary";
import AddWords_Page from "../pages/MainBlocks/addWords";
import Testing_Page from "../components/Testing/index";
import MainBlocks from "../pages/MainBlocks/mainBlocks";
import Achievements_Page from "../pages/MainBlocks/achievements";
import AddAchievement_Page from "../pages/MainBlocks/addAchievement";
import Constructor_Page from "../pages/Constructor/constructor";
import ConstructorTypeDetail_Page from "../pages/ConstructorTypeDetail/constructorTypeDetail";
const randomId = () => Math.floor(Math.random() * 1e9);

export const navbar = [
  {
    id: randomId(),
    title: "Test",
    path: "/test",
    element: <Testing_Page />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Auth",
    path: "/auth",
    element: <Auth />,
    private: false,
    hidden: true,
  },
  {
    id: randomId(),
    title: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Settings",
    path: "/settings",
    element: <Settings />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Settings",
    path: "/settings/main",
    element: <Settings />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Settings",
    path: "/settings/profile",
    element: <Settings />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Users",
    path: "/users",
    element: <User_user />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "User Detail",
    path: "/user/:id",
    element: <UserDetail_Page />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Users - Questionnaire",
    path: "/users/questionnaire",
    element: <User_questionnaire />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Main Lesson",
    path: "/main/lesson",
    element: <User_user />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Main Dictionary",
    path: "/main/dictionary",
    element: <User_user />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Main Course",
    path: "/course",
    element: <Course />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Course Module",
    path: "/course/module",
    element: <Course_module />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Course Block",
    path: "/course/block",
    element: <Course_block />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Course Lesson",
    path: "/course/lesson",
    element: <Course_lesson />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Course Game",
    path: "/course/game",
    element: <Course_game />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Mentors",
    path: "/mentors",
    element: <Mentors />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Mentor Detail",
    path: "/mentors/:id",
    element: <MentorDetail_Page />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Mentor Detail",
    path: "/constructor/type/:id",
    element: <ConstructorTypeDetail_Page />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Lesson Map",
    path: "/mainBlocks",
    element: <MainBlocks />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Lesson Map",
    path: "/mainBlocks/lessonMap",
    element: <LessonMap_Page />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Dictionary",
    path: "/mainBlocks/dictionary",
    element: <Dictionary_Page />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Add Words",
    path: "/mainBlocks/dictionary/addWords",
    element: <AddWords_Page />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Achievements",
    path: "/mainBlocks/achievements",
    element: <Achievements_Page />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Add Achievement",
    path: "/mainBlocks/achievements/addAchievement",
    element: <AddAchievement_Page />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "Constructor",
    path: "/constructor",
    element: <Constructor_Page />,
    private: false,
    hidden: false,
  },
  {
    id: randomId(),
    title: "404 Not Found",
    path: "*",
    element: (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>404 - Sahifa topilmadi</h2>
      </div>
    ),
    private: false,
    hidden: true,
  },
];
