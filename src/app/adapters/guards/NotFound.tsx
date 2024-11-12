import NotFound404 from '@components/globals/error/NotFound';
import { Route, Routes } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}
function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element=
      {
      <>
        <NotFound404 />
      </>
      } />
    </Routes>
  );
}
export default RoutesWithNotFound;