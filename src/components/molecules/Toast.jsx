import React from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';

function Toast({ message }) {
  return (
    <div className="inline-block">
      <div className="flex items-center text-black bg-[#E40037] p-1 rounded-xl px-3">
        <div>
          <AiFillExclamationCircle color="white" size="22px" />
        </div>
        <p className="m-0 text-white ml-2 text-lg">{message}</p>
      </div>
    </div>
  );
}

export default Toast;
