import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";

import Layout from "./components/Layout/Layout";

import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors"; // Змінено шлях імпорту
import Refresher from "./components/Refresher/Refresher";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    const fetchRefresh = async () => {
      try {
        await dispatch(refreshThunk());
      } catch (error) {
        console.error("Failed to refresh:", error);
      }
    };
    fetchRefresh();
  }, [dispatch]);

  if (isRefreshing) {
    return <Refresher />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;