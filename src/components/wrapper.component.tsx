import {
  CheckCircle,
  HandGrabbing,
  MagnifyingGlass,
  PaperPlaneRight,
} from 'phosphor-react';
import {
  FC,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { updateHistoryStates } from 'xstate/lib/utils';
import { data, locale } from '../helpers';
import { localeToNumeric } from '../helpers/locale';
import { Names } from '../helpers/types';
import { Avatar } from './avatar.component';
import { Input } from './input.component';

type WrapperProps = {
  children?: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const users = Object.keys(data);
  const [currentChatName, setCurrentChatName] = useState<Names>('Josefina');
  const ref = useRef<HTMLDivElement>();

  const [message, setMessage] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);
  const [currentChatMessages, setCurrentChatMessages] = useState(
    data[currentChatName].messages
  );
  const handleChatClick = (chat: Names) => {
    setCurrentChatName(chat);
  };
  console.log(currentChatMessages);
  const handleMessageChange = (msg: string) => {
    setMessage(msg);
  };

  useEffect(() => {
    const fasdasdsd = currentChatMessages.slice(-1)[0].forwarded;
    ref.current.scrollIntoView(true);
    if (fasdasdsd) return;
    setTimeout(() => setIsAnswering(true), 500);

    const timeout = setTimeout(() => {
      const randomId = Math.random() * 10000;
      const newMsg = {
        id: randomId,
        text: `${randomId}}`,
        timeStamp: new Date().toLocaleDateString(),
        forwarded: true,
      };
      setIsAnswering(false);
      setCurrentChatMessages((prev) => [...prev, newMsg]);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentChatMessages, currentChatName]);

  const handleSendMessage = (msg: string, arr: any[]) => {
    const randomId = Math.random() * 10000;
    const newMsg = {
      id: randomId,
      text: msg,
      timeStamp: new Date().toLocaleDateString(),
      forwarded: false,
    };
    setMessage('');
    setCurrentChatMessages((prev) => [...prev, newMsg]);
  };

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
            onChange={() => {}}
            className='mt-2'
            placeholder='Search or start new chat'
            iconLeft={
              <MagnifyingGlass className='text-[#bebebe] mr-2' size={24} />
            }
          />
        </div>
        <h2 className='text-[#75c7fa] px-3 text-2xl py-8'>Chats</h2>

        <nav>
          {users.map((user) => (
            <button
              onClick={() => handleChatClick(data[user].name)}
              key={data[user].name}
              className='flex text-left w-full border-b-[1px] py-4 items-center px-3'
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
            </button>
          ))}
        </nav>
      </section>

      {currentChatName && (
        <section className='w-full flex flex-col h-full border-l-[1px]'>
          <div className='flex py-4 items-center px-3'>
            <div className='flex py-4 items-center '>
              <span className='bg-[#ccc] w-14 h-14 overflow-hidden rounded-full inline-block'>
                <img src={data[currentChatName].img} className='w-14 h-14' />
              </span>
              <CheckCircle className='text-[green] relative top-5 right-4' />
            </div>
            {data[currentChatName].name}
          </div>

          <div className='border-y-[1px] px-3 flex flex-col h-full bg-secondary  overflow-y-hidden'>
            {currentChatMessages.map((message) =>
              message.forwarded ? (
                <div
                  ref={ref}
                  key={message.id}
                  className='flex flex-col text-white w-full'
                >
                  <div className='flex py-4'>
                    <span className='bg-[#ccc] w-14 h-14 overflow-hidden rounded-full inline-block mr-3'>
                      <img
                        src={data[currentChatName].img}
                        className='w-14 h-14'
                      />
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
                <div
                  ref={ref}
                  key={message.id}
                  className='flex flex-col text-white w-full'
                >
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
            {isAnswering && (
              <div className='relative bottom-8'>Answering...</div>
            )}
          </div>
          <div className='mt-auto items-center py-8 bg-primary'>
            <Input
              value={message}
              onChange={handleMessageChange}
              className='w-[90%] mx-auto'
              placeholder='Type your message'
              iconRight={
                <PaperPlaneRight
                  className='text-[#777777]'
                  onClick={() =>
                    handleSendMessage(message, data[currentChatName].messages)
                  }
                  size={24}
                />
              }
            />
          </div>
        </section>
      )}

      <div>{children}</div>
    </div>
  );
};

export { Wrapper };
