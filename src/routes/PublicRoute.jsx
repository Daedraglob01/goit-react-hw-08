import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors'; // Змінено шлях імпорту

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};

export default PublicRoute;