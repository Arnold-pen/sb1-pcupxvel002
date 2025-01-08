import { useEffect } from 'react';

const AdSenseVerification = () => {
  useEffect(() => {
    try {
      const existingScript = document.querySelector('script[src*="pagead2.googlesyndication.com"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8843414266419914';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
    } catch (error) {
      console.error('Error loading AdSense verification:', error);
    }
  }, []);

  return null;
};

export default AdSenseVerification;
