import { CheckCircle, PaperPlaneRight } from 'phosphor-react';
import type { FC, ReactNode } from 'react';
import { data, locale } from '../helpers';
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
        <div className='flex py-4 items-center'>
          <i>
            <img src={data['Josefina'].img} className='mr-2 w-14 h-14' />
            <CheckCircle className='text-[green] relative left-9 bottom-3' />
          </i>
          {data['Josefina'].name}
        </div>

        <div className='border-y-[1px] px-3 flex flex-col h-full bg-secondary'>
          {data['Josefina'].messages.map((message) =>
            message.forwarded ? (
              <div className='flex flex-col text-white w-full'>
                <div className='flex py-4'>
                  <img src={data['Josefina'].img} className='mr-2 w-14 h-14' />
                  <div>
                    <div className='text-sm bg-[#3e3e3e] rounded-3xl px-5 py-3  max-w-sm'>
                      {message.text}
                    </div>
                    <div className='text-[#ccc] ml-2 mt-2 text-xs'>
                      {new Date().toLocaleDateString('en-US', locale)}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='flex flex-col text-white w-full'>
                <div className='flex py-4 ml-auto'>
                  <div className='flex flex-col'>
                    <div className='text-sm bg-[#3e3e3e] ml-auto max-w-sm w-fit rounded-3xl px-4 py-3'>
                      {message.text}
                    </div>
                    <div className='text-[#ccc] mt-2 text-xs ml-auto'>
                      {new Date().toLocaleDateString('en-US', locale)}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className='mt-auto items-center py-8 bg-primary'>
          <div className='flex p-3 w-[90%] mx-auto border-2 border-[#efefef] rounded-3xl bg-white'>
            <Input
              placeholder='Type your message'
              iconRight={
                <PaperPlaneRight className='text-[#777777]' size={24} />
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
