import { useEffect } from 'react';
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

function getConnectionSpeed() {
  if (!navigator.connection) return 'unknown';
  return navigator.connection.effectiveType || 'unknown';
}

export const usePerformanceMetrics = () => {
  useEffect(() => {
    const reportMetric = ({ name, value, id }) => {
      const body = {
        dsn: process.env.NEXT_PUBLIC_ANALYTICS_ID, // Your analytics ID
        id,
        page: window.location.pathname,
        href: window.location.href,
        event_name: name,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        speed: getConnectionSpeed(),
      };

      const blob = new Blob([new URLSearchParams(body).toString()], {
        type: 'application/x-www-form-urlencoded',
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(vitalsUrl, blob);
      } else {
        fetch(vitalsUrl, {
          body: blob,
          method: 'POST',
          credentials: 'omit',
          keepalive: true,
        });
      }
    };

    onCLS(reportMetric);
    onFCP(reportMetric);
    onFID(reportMetric);
    onLCP(reportMetric);
    onTTFB(reportMetric);
  }, []);
};
