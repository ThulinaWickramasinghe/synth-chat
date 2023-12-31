'use client';

import { db } from '@/firebase';
import { PlusIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    // TODO: use a button component instead of div for clicking
    <div
      onClick={createNewChat}
      onKeyDown={(e) => e.key === 'Enter' && createNewChat()} // Handle Enter key press
      role='button'
      tabIndex={0}
      className='chatRow border border-gray-700'
    >
      <PlusIcon className='h-4 w-4' />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
