import React, { forwardRef } from 'react';
import { AiFillCalendar } from 'react-icons/ai';

const ExampleCustomInput = forwardRef(({ onClick, value, startDate }, ref) => {
  const dateArr = value.split('/');
  const transgerMinute = (minute) => {
    if (minute === 0) {
      return '00';
    }
    return minute;
  };
  return (
    <button ref={ref} type="button" className="" onClick={onClick}>
      <div className="w-[220px] mt-1 flex justify-start items-center  text-black px-2 py-1 border-solid border-[1.5px] border-bjsBlue rounded-xl">
        <AiFillCalendar color="#00A3FF" />
        <div className="flex justify-start items-center ml-3">
          <div className="font-bold">{dateArr[0]}/</div>
          <div className="font-bold">{dateArr[1]}/</div>
          <div className="font-bold mr-2">{dateArr[2]}</div>
          <div className="font-bold mr-1">at</div>
          <div className="font-bold">{startDate.getHours()}:</div>
          <div className="font-bold">
            {transgerMinute(startDate.getMinutes())}
          </div>
        </div>
      </div>
    </button>
  );
});

export default ExampleCustomInput;
