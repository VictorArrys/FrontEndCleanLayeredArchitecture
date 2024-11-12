// src/config/routes/PublicRoutes.tsx
import { Route } from 'react-router-dom';
import RoutesWithNotFound from '@adapters/guards/NotFound';
import LoginComponent from '@components/views/public/Login/Login';
import HomeComponent from '@components/views/public/Home'; // Nuevo componente Home

function PublicRoutesComponent() {
  return (
    <RoutesWithNotFound>
      {/* Rutas públicas */}
      <Route path="/" element={<HomeComponent />} /> {/* Home predeterminado */}
      <Route path="/login" element={<LoginComponent />} />
    </RoutesWithNotFound>
  );
}

export default PublicRoutesComponent;
