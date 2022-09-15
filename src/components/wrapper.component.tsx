import { CheckCircle, MagnifyingGlass, PaperPlaneRight } from 'phosphor-react';
import type { FC, ReactNode } from 'react';
import { data, locale } from '../helpers';
import { localeToNumeric } from '../helpers/locale';
import { Avatar } from './avatar.component';
import { Input } from './input.component';

type WrapperProps = {
  children?: ReactNode;
};

const users = Object.keys(data);
console.log();
const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className='flex border-2 border-[#e0e0e0] rounded-lg h-[900px] w-[1400px]'>
      <section className='w-2/3'>
        <div className='bg-primary px-3 py-4'>
          <Avatar
            src={
              'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Squint&eyebrowType=UpDown&mouthType=Smile&skinColor=Light'
            }
            checked
            className='py-2'
          />

          <Input
            className='mt-2'
            placeholder='Search or start new chat'
            iconLeft={
              <MagnifyingGlass className='text-[#bebebe] mr-2' size={24} />
            }
          />
        </div>
        <h2 className='text-[#75c7fa] px-3 text-2xl py-8'>Chats</h2>

        <nav className='px-3'>
          {users.map((user) => (
            <div
              key={data[user].name}
              className='flex border-b-[1px] py-4 items-center'
            >
              <Avatar src={data[user].img} checked className='py-2' />
              <div className=''>
                {data[user].name}
                <p>
                  {
                    data[user].messages
                      .filter((msg) => msg.forwarded)
                      .slice(-1)[0].text
                  }
                </p>
              </div>

              <div className='text-[#9b9b9b] mt-2 text-xs tracking-tighter ml-auto'>
                {new Date().toLocaleDateString('en-US', localeToNumeric)}
              </div>
            </div>
          ))}
        </nav>
      </section>

      <section className='w-full flex flex-col h-full border-l-[1px]'>
        <div className='flex py-4 items-center px-3'>
          <div className='flex py-4 items-center '>
            <span className='bg-[#ccc] w-14 h-14 overflow-hidden rounded-full inline-block'>
              <img src={data['Josefina'].img} className='w-14 h-14' />
            </span>
            <CheckCircle className='text-[green] relative top-5 right-4' />
          </div>
          {data['Josefina'].name}
        </div>

        <div className='border-y-[1px] px-3 flex flex-col h-full bg-secondary'>
          {data['Josefina'].messages.map((message) =>
            message.forwarded ? (
              <div key={message.id} className='flex flex-col text-white w-full'>
                <div className='flex py-4'>
                  <span className='bg-[#ccc] w-14 h-14 overflow-hidden rounded-full inline-block mr-3'>
                    <img src={data['Josefina'].img} className='w-14 h-14' />
                  </span>

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
              <div key={message.id} className='flex flex-col text-white w-full'>
                <div className='flex py-4 ml-auto'>
                  <div className='flex flex-col'>
                    <div className='text-sm bg-[#e5e5e5] text-[#676767] ml-auto max-w-sm w-fit rounded-3xl px-4 py-3'>
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
          <Input
            className='w-[90%] mx-auto'
            placeholder='Type your message'
            iconRight={<PaperPlaneRight className='text-[#777777]' size={24} />}
          />
        </div>
      </section>

      <div>{children}</div>
    </div>
  );
};

export { Wrapper };
