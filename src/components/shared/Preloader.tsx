import React, { FC, useEffect, useState } from 'react'

export const Preloader: FC<{ onFinish: () => void }> = ({ onFinish }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
   <div className={`loader-wrapper ${isLoaded ? "loaded" : ""}`}>
      <div className='loader'></div>
      <div className='loader-section section-left'></div>
      <div className='loader-section section-right'></div>
   </div>
  );
}
