// src/components/globals/error/NotFound.tsx
import { PublicRoutes } from '@domain/models/Utils/Routes';
import { useNavigate } from 'react-router-dom';

function NotFound404() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(PublicRoutes.HOME, { replace: true });
  };

  return (
    <section className="p-0 b-g-light">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="error-section">
              <h1>404</h1>
              <h2>Página no encontrada</h2>
              <button onClick={handleNavigation} className="btn btn-normal">
                Volver a Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound404;
