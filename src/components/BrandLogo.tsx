import React from 'react';

export type BrandLogoProps = {
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  variant?: 'primary' | 'negative';
};

const symbolSrc =
  "/assets/brand/plusseven-symbol.png";

const negativeLogoSrc =
  "/assets/brand/plusseven-logo-negative.png";

export default function BrandLogo({
  className = '',
  loading,
  fetchPriority,
  variant = 'primary'
}: BrandLogoProps) {
  const src = variant === 'negative' 
    ? negativeLogoSrc 
    : symbolSrc;

  return (
    <img
      src={src}
      alt={variant === 'negative' ? "+Seven — Orientações Educacionais e Empresariais" : "+Seven Orientações Educacionais e Empresariais"}
      className={`object-contain h-auto max-w-full ${className}`}
      loading={loading}
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
    />
  );
}
