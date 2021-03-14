import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Routes";
import { useSelector } from "react-redux";
import NewTaskModal from "./components/BoardDetails/Modal/NewTaskModal";
// import ScreenIndex from "./pages/ScreenIndex";

function App() {
  const isAuthenticated = useSelector((state) => state.auths.isAuthenticated);
  const userid = localStorage.getItem("token");
  console.log(isAuthenticated);
  console.log(userid);

  return (
    // <NewTaskModal />
    <Router>
      <GlobalStyle />
      <Switch>
        {localStorage.getItem("token") ? (
          <>
            {privateRoutes.map((route, index) => (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={index}
              />
            ))}
          </>
        ) : (
          <>
            {publicRoutes.map((route, index) => (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={index}
              />
            ))}
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
