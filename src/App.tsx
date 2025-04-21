import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import React, { Suspense } from "react";
import Loader from "./components/Loader";

// Lazy-loaded components
const Home = React.lazy(() => import("./components/Home/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Layout = React.lazy(() => import("./components/Layout/Layout"));

function App() {
  return (
    <BrowserRouter basename="inotes">
      <Provider store={store}>
        <div className="App">
          <Suspense fallback={<div><Loader /></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mainpage" element={<Layout />} />
              <Route path="/errorpage" element={<ErrorPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;