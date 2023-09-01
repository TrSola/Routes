import "./App.css";
import {
  HashRouter,
  NavLink,
  Outlet,
  Route,
  useNavigate,
  useParams,
  Routes,
} from "react-router-dom";
import { Fragment } from "react";

//Logout component
const Logout = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("./login");
      }}
    >
      Logout
    </button>
  );
};

const Todo = () => {
  return (
    <Fragment>
      <p>Todo</p>
      <Logout />
    </Fragment>
  );
};

const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Post = () => {
  return (
    <div>
      <h3>Post Page</h3>
      <Outlet />
    </div>
  );
};

const PostId = () => {
  let params = useParams;
  return <p>Post: {params.postId}</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/PostId" element={<PostId />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
