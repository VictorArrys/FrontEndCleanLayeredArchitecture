import { Route } from 'react-router-dom';
import RoutesWithNotFound from '@adapters/guards/NotFound';
import AuthGuard from '@adapters/guards/AuthGuard';
import ProfileComponent from '@components/views/private/Profile/Profile';
//<Route element={<AuthGuard privateValidation={true} />}>


function PrivateRoutesComponent() {
  return (
    <RoutesWithNotFound>
      <Route element={<AuthGuard privateValidation={true} />}>
        <Route path={"/profile"} element={<ProfileComponent />} />
      </Route>
    </RoutesWithNotFound>
  );
}

export default PrivateRoutesComponent;
