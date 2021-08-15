import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme_provider/theme";

const Login = lazy(() => import("./view/Login"));
const ForgotPassword = lazy(() => import("./view/ForgotPassword"));
const UpdatePassword = lazy(() => import("./view/UpdatePassword"));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/update-password" component={UpdatePassword} />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
