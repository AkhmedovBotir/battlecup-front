import React, { useState, useEffect } from 'react';

export const Image = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  placeholder = 'blur',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      setIsLoading(false);
      setError(true);
    };
  }, [src]);

  const blurStyles = isLoading && placeholder === 'blur' 
    ? 'blur-sm animate-pulse bg-gray-200' 
    : 'blur-0';

  if (error) {
    return (
      <div 
        className={\`flex items-center justify-center bg-gray-100 \${className}\`}
        style={{ width, height }}
        role="img"
        aria-label={\`Error loading image: \${alt}\`}
      >
        <svg 
          className="w-6 h-6 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={\`transition-all duration-300 \${blurStyles} \${className}\`}
      width={width}
      height={height}
      loading={loading}
      onLoad={() => setIsLoading(false)}
      onError={() => setError(true)}
      {...props}
    />
  );
};
