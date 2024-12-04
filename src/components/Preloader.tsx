import React, { FC, useEffect, useState } from 'react'

export const Preloader: FC<{ onFinish: () => void }> = ({ onFinish }) => {
  // const [animateOut, setAnimateOut] = useState(false);

  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setAnimateOut(true); // Trigger the split animation
  //       setTimeout(() => onFinish(), 1000); // Wait for animation to finish before hiding
  //     }, 2000); // Simulate loading time

  //     return () => clearTimeout(timer);
  //   }, [onFinish]);

  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Trigger the animation on mount
    const timer = setTimeout(() => {
      setAnimateOut(true); // Start the split animation
      setTimeout(() => onFinish(), 1000); // Finish after animation completes
    }, 500); // Delay before the animation starts (optional)

    return () => clearTimeout(timer);
  }, [onFinish]);


  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center ${animateOut ? 'bg-transparent' : ''
        } transition-all duration-700`}

    >
      {!animateOut && (
        <div className="loader">
          <div className=' absolute inset-0 z-[1000] w-full h-screen flex items-center justify-center '>
            <div className='animate-loaderBorderAnimation1 ease-linear rounded-full border-8 h-40 w-40 border-t-amber-500 flex items-center justify-center border-transparent'></div>
          </div>
          <div className='absolute inset-0 z-[1000] w-full h-screen flex items-center justify-center'>
            <div className='animate-loaderBorderAnimation2 ease-linear rounded-full border-8 h-32 w-32 border-t-teal-500 flex items-center justify-center border-transparent'></div>
          </div>
          <div className='absolute inset-0 z-[1000] w-full h-screen flex items-center justify-center'>
            <div className='animate-loaderBorderAnimation3 ease-linear rounded-full border-8 h-24 w-24 border-t-yellow-300 border-transparent'></div>
          </div>
        </div>
      )}
      {/* Animated splitting effect */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 ${animateOut ? 'translate-x-[-100%]' : ''
          } bg-[var(--green-400-rgba)] transition-transform duration-700`}
      ></div>
      <div
        className={`absolute top-0 right-0 h-full w-1/2 ${animateOut ? 'translate-x-[100%]' : ''
          } bg-[var(--green-400-rgba)] transition-transform duration-700`}
      ></div>
    </div>
  );
}
