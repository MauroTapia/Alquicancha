import { useState, useEffect } from 'react';

const useScrollDetector = () => {
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrolledDown(scrollY > 70);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolledDown;
};

export default useScrollDetector;
