import { DocumentData } from 'firebase/firestore';
import Image from 'next/image';

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isAI = message.user.name === 'ChatGPT';
  return (
    <div
      className={`py-5 text-white ${isAI && 'bg-[#434654]'} mx-2 rounded-lg`}
    >
      <div className='mx-auto flex max-w-2xl space-x-5 px-10'>
        <Image
          src={message.user.avatar}
          className='h-8 w-8 rounded-lg'
          alt="User's avatar"
          width={32}
          height={32}
        />
        <p className='pt-1 text-sm'>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
