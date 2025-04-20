// src/components/PopupModal.js
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const PopupModal = ({ show, onClose, animationData, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg text-center relative">
        <Player
          autoplay
          loop={true}
          src={animationData}
          style={{ height: '150px', width: '150px', margin: '0 auto' }}
        />
        <p className="text-lg font-semibold mt-4">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-[#335230] text-white rounded hover:bg-[#2a441e]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
