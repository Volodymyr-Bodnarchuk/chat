import React, { FC } from 'react';
import { CheckCircle } from 'phosphor-react';
type AvatarProps = {
  readonly src: string;
  readonly checked: boolean;
  readonly className?: string;
};

const Avatar: FC<AvatarProps> = ({ src, checked, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className='bg-[#e0e0e0] w-14 h-14 overflow-hidden rounded-full inline-block'>
        <img src={src} className='w-14 h-14' />
      </span>
      {checked && (
        <CheckCircle className='text-[green] relative top-5 right-4' />
      )}
    </div>
  );
};
export { Avatar };
