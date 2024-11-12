// src/components/shared/text/TextContent.tsx
import React from 'react';
import { colors } from '@styles/colors';

interface TextContentProps {
  text: string;
  variant?: 'title' | 'subtitle' | 'paragraph';
  color?: string;
}

const TextContent: React.FC<TextContentProps> = ({ text, variant = 'paragraph', color }) => {
  const getTextStyle = () => {
    switch (variant) {
      case 'title':
        return { fontSize: '24px', fontWeight: 'bold', color: color || colors.primary };
      case 'subtitle':
        return { fontSize: '18px', fontWeight: '600', color: color || colors.secondary };
      default:
        return { fontSize: '16px', color: color || colors.primary };
    }
  };

  return <p style={getTextStyle()}>{text}</p>;
};

export default TextContent;
