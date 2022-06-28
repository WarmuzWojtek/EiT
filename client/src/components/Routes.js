import { BrowserRouter, Route } from "react-router-dom";
import StartPage from "../Pages/StartPage.jsx";
import DemoPlay from "../Pages/DemoPlay.jsx";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        {({ match }) => <StartPage show={match !== null} />}
      </Route>

      <Route path="/demo">
        {({ match }) => <DemoPlay show={match !== null} />}
      </Route>
      <Route path="/login">
        {({ match }) => <LoginPage show={match !== null} />}
      </Route>
      <Route path="/register">
        {({ match }) => <RegisterPage show={match !== null} />}
      </Route>
    </BrowserRouter>
  );
};

export default Routes;
