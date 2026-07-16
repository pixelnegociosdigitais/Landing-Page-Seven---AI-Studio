import React from 'react';

export type BrandLogoProps = {
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  variant?: 'primary' | 'negative';
};

export default function BrandLogo({
  className = '',
  loading,
  fetchPriority,
  variant = 'primary'
}: BrandLogoProps) {
  const src = variant === 'negative' 
    ? "/assets/brand/logo-plusseven-negativa.png" 
    : "/assets/brand/logo-plusseven-oficial.png";

  return (
    <img
      src={src}
      alt="+Seven Orientações Educacionais e Empresariais"
      className={`object-contain ${className}`}
      loading={loading}
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
    />
  );
}
