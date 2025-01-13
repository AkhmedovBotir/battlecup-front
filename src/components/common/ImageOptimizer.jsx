import React, { useState, useEffect } from 'react';

const generateSrcSet = (src, sizes = [320, 640, 768, 1024, 1280]) => {
  if (!src) return '';
  
  const extension = src.split('.').pop();
  const basePath = src.replace(`.${extension}`, '');
  
  return sizes
    .map(size => `${basePath}-${size}.${extension} ${size}w`)
    .join(', ');
};

export const ImageOptimizer = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '100vw',
  priority = false,
  quality = 75,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [localSrc, setLocalSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
      setLocalSrc(src);
    };
    
    img.onerror = () => {
      setError(true);
      // Fallback image
      setLocalSrc('/placeholder.png');
    };
  }, [src]);

  // Generate blur data URL for placeholder
  const blurDataURL = \`data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 \${width} \${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='.5'%3E%3C/feGaussianBlur%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'%3E%3C/feFuncA%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='\${src}'/%3E%3C/svg%3E\`;

  return (
    <div 
      className={\`relative overflow-hidden \${className}\`}
      style={{ width, height }}
    >
      {/* Blur placeholder */}
      {!isLoaded && !error && (
        <div
          className="absolute inset-0 blur-md"
          style={{
            backgroundImage: \`url("\${blurDataURL}")\`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      
      <img
        src={localSrc}
        srcSet={generateSrcSet(localSrc)}
        sizes={sizes}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={\`
          transition-opacity duration-300 
          \${isLoaded ? 'opacity-100' : 'opacity-0'}
          \${error ? 'grayscale' : ''}
        \`}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-sm text-gray-500">Rasm yuklanmadi</span>
        </div>
      )}
    </div>
  );
};
