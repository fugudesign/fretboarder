import { useEffect, useState } from 'react';

export const useInstallPrompt = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setIsIOS(true);
    }
    if (/android/.test(userAgent)) {
      setIsAndroid(true);
    }
    if ('standalone' in window.navigator && window.navigator.standalone) {
      setIsStandalone(true);
    }
  }, []);

  return {
    isIOS,
    isAndroid,
    isStandalone,
    isPromptable: (isIOS || isAndroid) && !isStandalone,
  };
};
