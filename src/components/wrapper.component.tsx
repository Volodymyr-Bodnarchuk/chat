import { PaperPlaneRight } from 'phosphor-react';
import type { FC, ReactNode } from 'react';

import { Input } from './input.component';

type WrapperProps = {
  children?: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className='flex border-2 border-[#e0e0e0] rounded-lg h-[900px] w-[900px]'>
      <section className='w-1/3 '>
        <div className='bg-primary'>
          <div>icon</div>
          <input className='bg-black' type='text' />
        </div>
        <hr />
        <h3>CHATS</h3>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </section>

      <section className='w-full flex flex-col h-full border-l-[1px]'>
        <div className='flex bg-primary'>
          Icon <div>name</div>
        </div>
        <div className='border-y-[1px] h-full bg-secondary'>chat</div>
        <div className='mt-auto items-center py-8 bg-primary'>
          <div className='flex p-3 w-[90%] mx-auto border-2 border-[#efefef] rounded-3xl bg-white'>
            <Input
              iconRight={
                <PaperPlaneRight className='text-[#777777]' size={32} />
              }
            />
          </div>
        </div>
      </section>

      <div>{children}</div>
    </div>
  );
};

export { Wrapper };
