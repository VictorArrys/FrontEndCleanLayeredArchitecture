import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesWebApp from '@config/routes/RouterConfig';
import LoadWrapperGlobal from '@components/globals/wrapper/DefaultWrapper';
import MainLayout from '@components/globals/layout/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@domain/redux/store'; 

export interface AppConfig {
  name: string;
  description: string;
  logo?: string;
}

const appConfig = {
  name: 'Platform Works',
  description: 'Conectando talento con oportunidades',
  logo: '/path-to-your-logo.svg' // Opcional
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<LoadWrapperGlobal />}>
          <BrowserRouter>
            <MainLayout appConfig={appConfig}>
              <RoutesWebApp />
            </MainLayout>
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
