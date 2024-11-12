import { AppConfig } from 'App';
import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import { colors } from '@styles/colors';

interface HeaderProps {
  appConfig: AppConfig;
}

export const Header: React.FC<HeaderProps> = ({ appConfig }) => {
  return (
    <HeaderContainer>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {appConfig.logo && (
            <img src={appConfig.logo} alt="Logo" className="h-10 w-10" />
          )}
          <div>
            <h3 style={{ color: colors.secondary }} className="text-2xl font-bold">{appConfig.name}</h3>
            <p className="text-sm text-blue-100">{appConfig.description}</p>
          </div>
        </div>
        <Menu />
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: ${colors.primary}; 
  color: ${colors.secondary};
  padding: 1rem;
  text-align: center;
  width: 100%; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default Header;
