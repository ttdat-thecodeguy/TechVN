import { withRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/template/Header";
import { routes, AdminRoutes } from "../../service/routes";
import Footer from "../../components/template/Footer";

import AdminHeader from "../../components/template/AdminHeader";

import Loader from "../Loader";
import { useSelector } from "react-redux";
import { isAuth } from "../../store/selector/authSelector";
import { InterceptorError } from "../../service/axiosInstance";
import "./App.css";

import NetworkError from "../Error/NetworkError";

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
            auth={auth}
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
      { props.history.location.pathname === "/network-error" ? <NetworkError></NetworkError> : rgxAdmin.test(props.history.location.pathname) ? (
        <>
          <AdminHeader history={props.history} auth={auth} />
            <div className="mainAdmin" id="mainAdmin">{showContent(AdminRoutes, auth)}</div>
        </>
      ) : (
        <>
          <Header history={props.history} auth={auth} />
            {showContent(routes, auth)}
          <Footer />
        </>
      )}
    </div>
  );
};

export default withRouter(App);
