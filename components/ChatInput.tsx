'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState('');
  const { data: session } = useSession();

  return (
    <div className='m-1 rounded-lg bg-gray-700/50 text-sm text-gray-400'>
      {/* TODO: Make it possible to add multi line prompts */}
      <form className='flex space-x-5 p-5'>
        <input
          type='text'
          placeholder='Type your message here...'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className='flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300'
          disabled={!session}
        />
        <button
          type='submit'
          disabled={!session || !prompt}
          className='rounded bg-[#11A37F] px-4 py-2 font-bold text-white hover:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400'
        >
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
        </button>
      </form>

      <div>{/* Model Selection  */}</div>
    </div>
  );
}

export default ChatInput;
