// src/app/components/layout/MainLayout.tsx
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { AppConfig } from 'App';
import { colors } from '@styles/colors';
import './MainLayout.css'; // Asegúrate de tener un archivo CSS para tus estilos.

interface MainLayoutProps {
  children: React.ReactNode;
  appConfig: AppConfig;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, appConfig }) => {
  return (
    <div className="main-layout">
      <Header appConfig={appConfig} />
      <main style={{ backgroundColor: colors.background }} className="main-content">
        {children}
      </main>
      <Footer appConfig={appConfig} />
    </div>
  );
};

export default MainLayout;
