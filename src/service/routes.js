import HomePage from "../container/HomePage";
import Login from "../container/Auth/Login";
import Register from "../container/Auth/Register";
import Blog from "../container/Blog";
import UserDetails from "../container/User/UserDetails";
import UserBlog from "../container/User/UserBlog";
import BlogEdit from "../container/Blog/BlogEdit";

import Error from "../container/Error";
import * as ErrorTypes from "../constraints/ErrorType"

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/login",
    exact: false,
    main: () => <Login />,
  },
  {
    path: "/register",
    exact: false,
    main: () => <Register />,
  },
  {
    path: "/blog/:name",
    exact: true,
    main: () => <Blog />,
  },
  {
    path: "/user/",
    exact: true,
    main: () => <UserDetails />,
  },
  {
    path: "/user/blog",
    exact: true,
    main: () => <UserBlog />,
  },
  {
    path: "/user/blog/add",
    exact: false,
    main: () => <BlogEdit />,
  },
  {
    path: "/user/blog/edit/:id",
    exact: false,
    main: ({ match, history }) => <BlogEdit match={match} />
  },
  {
    path: "/404",
    exact: false,
    main: () => <Error error={ErrorTypes.NOT_FOUND} />,
  },
  {
    path: "/500",
    exact: false,
    main: () => <Error error={ErrorTypes.SERVER_FAILURE} />,
  },
  {
    path: "/401",
    exact: false,
    main: () => <Error error={ErrorTypes.UNAUTHORIZED} />,
  },
  {
    path: "/403",
    exact: false,
    main: () => <Error error={ErrorTypes.FORBIDDEN} />,
  },
  {
    path: "",
    exact: false,
    main: () => <Error error={ErrorTypes.NOT_FOUND} />,
  },
];
export default routes;
