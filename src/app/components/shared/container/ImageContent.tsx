// src/components/shared/image/ImageContent.tsx
import React from 'react';

interface ImageContentProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
}

const ImageContent: React.FC<ImageContentProps> = ({ src, alt, width = '100%', height = 'auto', borderRadius = '0px' }) => {
  return (
    <img src={src} alt={alt} style={{ width, height, borderRadius }} />
  );
};

export default ImageContent;
