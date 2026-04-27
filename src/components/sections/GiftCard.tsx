import Image from 'next/image';
import React from 'react';

const GiftCard = () => {
  return (
    <>
      <div className="flex items-center justify-center p-6">
        <div className="relative w-[280px] h-[170px] mt-[1rem] m-auto">
          <Image
            src="/giftcard.jpg"
            alt="American Eagle Gift Card"
            fill
            className="drop-shadow-2xl rounded-[1em]"
          />
        </div>
      </div>
    </>
  );
};

export default GiftCard;
