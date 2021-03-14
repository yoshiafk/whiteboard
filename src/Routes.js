import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ScreenIndex from "./pages/ScreenIndex";
import ResetPassword from "./pages/Auth/NewPassword";
import Account from "./pages/Account";

export const publicRoutes = [
  {
    component: LandingPage,
    path: "/",
    exact: true,
  },
  {
    component: Signin,
    path: "/signin",
  },
  {
    component: Signup,
    path: "/signup",
  },
  {
    component: ForgotPassword,
    path: "/forgotpassword",
  },
  {
    component: ResetPassword,
    path: "/reset-password",
  },
];

export const privateRoutes = [
  {
    component: ScreenIndex,
    path: "/home",
    exact: true,
  },
  {
    component: ScreenIndex,
    path: "/",
    exact: true,
  },
  {
    component: ScreenIndex,
    path: "/boards",
    exact: true,
  },
  {
    component: ScreenIndex,
    path: "/tasks",
    exact: true,
  },
  {
    component: ScreenIndex,
    path: "/teamsboards/:pathname",
    exact: true,
  },
  {
    component: Account,
    path: "/account",
    exact: true,
  },
  { component: ScreenIndex, path: "/details", exact: true },
];
