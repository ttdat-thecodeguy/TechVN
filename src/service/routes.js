import HomePage from "../container/HomePage";
import Contact from "../container/Contact";
import AboutMe from "../container/AboutMe";


import Login from "../container/Auth/Login";
import Register from "../container/Auth/Register";
import Blog from "../container/Blog";

import UserDetails from "../container/User/UserDetails";
import UserBlog from "../container/User/UserBlog";

import BlogEdit from "../container/Blog/BlogEdit";
import CateBlog from "../container/Cate";


import Error from "../container/Error";

import AdminDashboard from "../container/Admin";
import UserDashboard from "../container/Admin/User";
import BlogsDashboard from "../container/Admin/Blog";
import TagsDashboard from "../container/Admin/Tags";
import TrendingFullList from "../container/Blog/TrendingFullList";


export const routes = [
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
    path: "/danh-sach-blog",
    exact: true,
    main: () => <CateBlog />
  },
  {
    path: "/danh-sach-blog/:searchName",
    exact: false,
    main: () => <CateBlog />
  },
  {
    path: "/yeu-thich-nhat",
    exact: false,
    main: () => <TrendingFullList />
  },
  {
    path: "/danh-muc/:id/:name",
    exact: false,
    main: () => <CateBlog />
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
    path: "/contact",
    exact: false,
    main: ({ match, history }) => <Contact match={match} />
  },
  {
    path: "/about",
    exact: false,
    main: ({ match, history }) => <AboutMe match={match} />
  },
  {
    path: "/404",
    exact: false,
    main: () => <Error code={404} />,
  },
  {
    path: "/500",
    exact: false,
    main: () => <Error code={500} />,
  },
  {
    path: "/401",
    exact: false,
    main: () => <Error code={401} />,
  },
  {
    path: "/403",
    exact: false,
    main: () => <Error code={403} />,
  },
  {
    path: "",
    exact: false,
    main: () => <Error code={404} />,
  },
];

export const AdminRoutes = [
  {
    path: "/admin",
    exact: true,
    main: ({ match, history }) => <AdminDashboard match={match} />
  },
  {
    path: "/admin/user/",
    exact: false,
    main: ({ match, history }) => <UserDashboard match={match} />
  },
  {
    path: "/admin/blog/",
    exact: false,
    main: ({ match, history }) => <BlogsDashboard match={match} />
  },
  {
    path: "/admin/tag/",
    exact: false,
    main: ({ match, history }) => <TagsDashboard match={match} />
  },



];

