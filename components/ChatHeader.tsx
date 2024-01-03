import ModelSelection from './ModelSelection';
import { Cog6ToothIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

type Props = {
  chatId: string;
};

function ChatHeader({ chatId }: Props) {
  return (
    <div className='mb-2 flex content-center justify-around md:mx-2 md:justify-between'>
      <button className='font-bold hover:opacity-50 disabled:cursor-not-allowed sm:invisible '>
        <ArrowLeftIcon className='h-6 w-6 text-gray-400' />
      </button>
      <div>
        <ModelSelection />
      </div>
      <button className='font-bold hover:opacity-50 disabled:cursor-not-allowed'>
        <Cog6ToothIcon className='h-6 w-6 text-gray-400' />
      </button>
    </div>
  );
}

export default ChatHeader;
