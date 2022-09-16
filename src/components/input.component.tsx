import React, { FC } from 'react';

type InputProps = {
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
  placeholder?: string;
  className?: string;
  onChange: (msg: string) => void;
  value?: string;
};

const Input: FC<InputProps> = ({
  onChange,
  iconLeft,
  iconRight,
  placeholder,
  className,
  value,
}) => {
  return (
    <div
      className={`flex p-3 border-2 border-[#efefef] rounded-3xl bg-white ${className}`}
    >
      {iconLeft && iconLeft}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none placeholder-[#ccc] text-black focus:outline-none disabled:cursor-not-allowed `}
        type='text'
        placeholder={placeholder}
      />
      {iconRight && iconRight}
    </div>
  );
};

export { Input };
