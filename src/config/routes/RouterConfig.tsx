// src/config/routes/RouterConfig.ts
import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import PublicRoutesComponent from './PubicRoutes';
import PrivateRoutesComponent from './PrivateRoutes';
import RoutesWithNotFound from '@adapters/guards/NotFound';
import LoadWrapperGlobal from '@components/globals/wrapper/DefaultWrapper';
import { PrivateRoutes } from '@domain/models/Utils/Routes';

function RoutesWebApp() {
  return (
    <Suspense fallback={<LoadWrapperGlobal />}>
      <RoutesWithNotFound>
        {/* Ruta por defecto para iniciar en Home */}
        <Route path="/" element={<PublicRoutesComponent />} />
        
        {/* Rutas Privadas */}
        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<PrivateRoutesComponent />} />

        {/* Rutas Públicas */}
        <Route path="/*" element={<PublicRoutesComponent />} />
      </RoutesWithNotFound>
    </Suspense>
  );
}

export default RoutesWebApp;