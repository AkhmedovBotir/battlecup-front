import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSEO = ({ 
  title, 
  description, 
  keywords, 
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  canonicalPath
}) => {
  const location = useLocation();
  const baseUrl = 'https://battlecup.uz';
  const currentUrl = `${baseUrl}${location.pathname}`;
  const canonicalUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : currentUrl;

  useEffect(() => {
    // Update title
    document.title = title ? `${title} | BattleCup` : 'BattleCup - Dota 2 turnirlar platformasi';

    // Meta tags to update/create
    const metaTags = {
      // Basic meta tags
      'description': description || 'O\'zbekistondagi eng yirik Dota 2 turnirlar platformasi. Turnirlarda qatnashing, jamoa tuzing va sovrinlarni qo\'lga kiriting!',
      'keywords': keywords || 'dota 2, tournament, battlecup, cybersport, esport, uzbekistan',
      
      // Open Graph tags
      'og:url': currentUrl,
      'og:type': type,
      'og:title': title,
      'og:description': description,
      'og:image': image ? `${baseUrl}${image}` : `${baseUrl}/og-image.png`,
      
      // Twitter tags
      'twitter:card': 'summary_large_image',
      'twitter:url': currentUrl,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image ? `${baseUrl}${image}` : `${baseUrl}/og-image.png`,
      
      // Article specific tags
      ...(type === 'article' && {
        'article:published_time': publishedTime,
        'article:modified_time': modifiedTime,
        'article:author': author,
        'article:section': section,
      })
    };

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      if (content) {
        let meta = document.querySelector(`meta[property="${name}"]`) || 
                  document.querySelector(`meta[name="${name}"]`);
                  
        if (!meta) {
          meta = document.createElement('meta');
          if (name.startsWith('og:') || name.startsWith('twitter:') || name.startsWith('article:')) {
            meta.setAttribute('property', name);
          } else {
            meta.setAttribute('name', name);
          }
          document.head.appendChild(meta);
        }
        
        meta.setAttribute('content', content);
      }
    });

    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Clean up function
    return () => {
      document.title = 'BattleCup - Dota 2 turnirlar platformasi';
    };
  }, [title, description, keywords, image, type, publishedTime, modifiedTime, author, section, canonicalUrl]);
};
