import React from 'react';
import { colors } from '@styles/colors';
import './form.css'

interface FormContainerProps {
  children: React.ReactNode;
  title?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, title }) => {
  return (
    <div
      style={{
        padding: '2rem',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        boxShadow: '20px 20px 40px -6px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        borderLeft: `1px solid ${colors.accent}`,
        borderTop: `1px solid ${colors.accent}`,
      }}
    className='container-main' >
      {title && <h2 style={{ color: colors.primary, fontFamily: 'Montserrat, sans-serif' }}>{title}</h2>}
      {children}
    </div>
  );
};

export default FormContainer;
