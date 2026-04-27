'use client';

import { Clock, Heart, Gem, Droplets } from 'lucide-react';
import { useState, useEffect } from 'react';

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(309); // 5:09 in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="border-b border-primary/20 py-2 px-4 text-center relative z-10 overflow-hidden bg-[linear-gradient(90deg,#eef3f9_0%,#d9e4f0_45%,#c4d3e5_100%)]">
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <div className="flex justify-around">
          <Heart className="w-6 h-6 text-primary/25 -mt-2" />
          <Droplets className="w-4 h-4 text-primary/20 -mt-1" />
          <Gem className="w-5 h-5 text-primary/30 -mt-2 fill-current" />
          <Heart className="w-5 h-5 text-primary/25 -mt-2" />
          <Droplets className="w-4 h-4 text-primary/20 -mt-1" />
          <Gem className="w-6 h-6 text-primary/30 -mt-2 fill-current" />
          <Heart className="w-5 h-5 text-primary/25 -mt-2" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 max-w-xl mx-auto relative">
        <Clock className="w-4 h-4 text-primary flex-shrink-0" />
        <Droplets className="w-3 h-3 text-primary/50 animate-pulse flex-shrink-0" />
        <p className="text-[#1b2f4a] text-xs md:text-sm font-medium">
          <span className="font-bold">
            You have {formattedTime} minutes left to unlock your $750 American
            Eagle Gift Card!
          </span>
        </p>
        <Droplets className="w-3 h-3 text-primary/50 animate-pulse flex-shrink-0" />
      </div>

      <p className="text-[#51657f] text-[10px] mt-0.5">
        Complete the steps before access expires
      </p>
    </div>
  );
};

export default CountdownBanner;
