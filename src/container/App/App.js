import "./App.css";
import { withRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import "./App.css";
import routes from "../../service/routes";
import Footer from "../../components/Footer";
import Loader from '../Loader'
import { useSelector } from 'react-redux'
import { isAuth } from '../../store/selector/authSelector'
import { InterceptorError } from '../../service/axiosInstance'

const App = (props) => {

  InterceptorError(props.history)

  const showContent = (routes) => {
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

  const [ isLoading, auth  ] = useSelector(state => [
    state.loading,
    isAuth(state)
  ])
 
  return (
    <div class="site-wrap">
      {isLoading && ( <Loader /> )}
      <Header history={props.history} auth={auth} />  
        {showContent(routes)}
      <Footer/>
    </div>
  );
};

export default withRouter(App);
