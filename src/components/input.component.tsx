import React, { FC } from 'react';

type InputProps = {
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
  placeholder?: string;
  className?: string;
};

const Input: FC<InputProps> = ({
  iconLeft,
  iconRight,
  placeholder,
  className,
}) => {
  return (
    <>
      {iconLeft && iconLeft}
      <input
        className={`w-full appearance-none placeholder-[#ccc] text-black focus:outline-none disabled:cursor-not-allowed ${className}`}
        type='text'
        placeholder={placeholder}
      />
      {iconRight && iconRight}
    </>
  );
};

export { Input };
