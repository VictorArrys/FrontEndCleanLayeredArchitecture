import { colors } from '@styles/colors';
import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, placeholder, required }) => (
  <div style={{ marginBottom: '2em' }}>
    <label className="form-label">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      style={{
        background: 'transparent',
        width: '100%',
        padding: '1em',
        border: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50px',
        backdropFilter: 'blur(5px)',
        boxShadow: '4px 4px 60px rgba(0, 0, 0, 0.2)',
        color: colors.text_normal_2,
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '500',
        transition: 'all 0.2s ease-in-out',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      }}
    />
  </div>
);

export default InputField;