import { AppConfig } from 'App';
import React from 'react';
import styled from 'styled-components';
import { colors } from '@styles/colors';

interface FooterProps {
  appConfig: AppConfig;
}

export const Footer: React.FC<FooterProps> = ({ appConfig }) => {
  return (
    <FooterContainer>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{appConfig.name}</h3>
            <p className="text-gray-300">{appConfig.description}</p>
          </div>
          {/* Otros bloques del footer */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {appConfig.name}. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${colors.primary}; 
  color: ${colors.secondary};
  padding: 1rem;
  text-align: center;
  width: 100%;
  margin-top: auto; 
`;

export default Footer;
