import { withRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/template/Header";
import { routes, AdminRoutes } from "../../service/routes";
import Footer from "../../components/template/Footer";

import AdminHeader from "../../components/template/AdminHeader";

import Loader from "../Loader";
import { useSelector } from "react-redux";
import { isAuth } from "../../store/selector";
import { InterceptorError } from "../../service/axiosInstance";
import "./App.css";

import NetworkError from "../Error/NetworkError";
import { withTranslation } from "react-i18next";

const App = (props) => {
  InterceptorError(props.history);

  const showContent = (routes, auth) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, idx) => {
        return (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  const [isLoading, auth] = useSelector((state) => [
    state.loading,
    isAuth(state)
  ]);
  const rgxAdmin = new RegExp("/admin/[w]*");

  return (
    <div class="site-wrap">
      {isLoading && <Loader />}
      {props.history.location.pathname === "/network-error" ? (
        <NetworkError></NetworkError>
      ) : rgxAdmin.test(props.history.location.pathname) ? (
        auth !== null && auth !== undefined && auth.user.role === 2 ? (
          <>
            <AdminHeader
              history={props.history}
              auth={auth}
              isLogin={auth ? true : false}
            />
            <div className="mainAdmin" id="mainAdmin">
              {showContent(AdminRoutes, auth)}
            </div>
          </>
        ) : (
          props.history.push("/403")
        )
      ) : (
        <>
          <Header
            history={props.history}
            auth={auth}
            isLogin={auth ? true : false}
          />
          {showContent(routes, auth)}
          <Footer />
        </>
      )}
    </div>
  );
};

export default withRouter(withTranslation("common")(App));
