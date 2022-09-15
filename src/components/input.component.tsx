import React, { FC } from 'react';

type InputProps = {
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
};

const Input: FC<InputProps> = ({ iconLeft, iconRight }) => {
  return (
    <>
      {iconLeft && iconLeft}
      <input
        className='bg-inherit w-full appearance-none placeholder-[#ccc] text-black focus:outline-none disabled:cursor-not-allowed'
        type='text'
        placeholder='Type your message'
      />
      {iconRight && iconRight}
    </>
  );
};

export { Input };
