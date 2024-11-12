// src/adapters/guards/AuthGuard.tsx
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '@domain/redux/store';

interface AuthGuardProps {
  privateValidation: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ privateValidation }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  if (isAuthenticated && privateValidation) {
    return <Outlet />;
  } else if (!isAuthenticated && !privateValidation) {
    return <Outlet />;
  } else {
    return <Navigate to={`/login`} />;
  }
};

export default AuthGuard;
