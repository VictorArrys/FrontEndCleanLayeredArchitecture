// src/components/shared/button/Button.tsx
import React from 'react';
import { colors } from '@styles/colors';

interface ButtonProps {
  label: string;
  onClick: (e: React.FormEvent) => void;
  variant?: 'primary' | 'warning' | 'success';
  backgroundColor?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  backgroundColor,
  icon,
  disabled = false,
}) => {
  const getButtonColor = () => {
    switch (variant) {
      case 'warning':
        return colors.warning || '#ffc107';
      case 'success':
        return colors.success || '#28a745';
      default:
        return colors.primary;
    }
  };

  return (
    <button
      onClick={(e) => onClick(e as React.FormEvent)}
      style={{
        backgroundColor: backgroundColor || getButtonColor(),
        color: colors.secondary,
        display: 'flex',
        alignItems: 'center',
        padding: '0.8em 1.5em',
        border: 'none',
        borderRadius: '24px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: '1rem',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '500',
        transition: 'all 0.2s ease-in-out',
        boxShadow: '4px 4px 60px rgba(0, 0, 0, 0.2)',
      }}
      disabled={disabled}
    >
      {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;