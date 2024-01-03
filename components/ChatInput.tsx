'use client';

import { db } from '@/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState('');
  const { data: session } = useSession();
  const { data: model } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt('');

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        'users',
        session?.user?.email!,
        'chats',
        chatId,
        'messages'
      ),
      message
    );

    // Toast notification : loading
    const notification = toast.loading('ChatGPT is thinking ...', {
      position: 'bottom-left',
    });

    await fetch('/api/prompts/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // Toast notification : successfull
      toast.success('ChatGPT has responded!', {
        id: notification,
        position: 'bottom-left',
      });
    });
  };

  return (
    <div className='m-1 rounded-lg bg-gray-700/50 text-sm text-gray-400'>
      {/* TODO: Make it possible to add multi line prompts */}
      <form onSubmit={sendMessage} className='flex space-x-5 p-5'>
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
    </div>
  );
}

export default ChatInput;
