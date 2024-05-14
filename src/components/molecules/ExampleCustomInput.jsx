import React, { forwardRef } from 'react';

const ExampleCustomInput = forwardRef(({ onClick }, ref) => (
  <button
    ref={ref}
    type="button"
    className="block text-white font-bold text-lg w-[150px] px-2 py-1 rounded-2xl bg-bjsBlue"
    onClick={onClick}
  >
    마감시간 설정
  </button>
));

export default ExampleCustomInput;
