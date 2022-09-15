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
    <div
      className={`flex p-3 border-2 border-[#efefef] rounded-3xl bg-white ${className}`}
    >
      {iconLeft && iconLeft}
      <input
        className={`w-full appearance-none placeholder-[#ccc] text-black focus:outline-none disabled:cursor-not-allowed `}
        type='text'
        placeholder={placeholder}
      />
      {iconRight && iconRight}
    </div>
  );
};

export { Input };
