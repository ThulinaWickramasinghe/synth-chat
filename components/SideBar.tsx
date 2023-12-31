'use client';

import { useSession, signOut } from 'next-auth/react';
import NewChat from './NewChat';
import Image from 'next/image';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatRow from './ChatRow';
import ModelSelection from './ModelSelection';

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session.user?.email!, 'chats'),
        orderBy('createdAt', 'desc')
      )
  );

  return (
    <div className='flex h-screen flex-col p-2'>
      <div className='flex-1'>
        <div>
          <NewChat />
          <div className='hidden sm:inline'>
            <ModelSelection />
          </div>
          <div className='my-2 flex flex-col space-y-2'>
            {loading && (
              <div className='animate-pulse text-center text-white'>
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs.map((chat) => <ChatRow key={chat.id} id={chat.id} />)}
          </div>
        </div>
      </div>
      {session && (
        <Image
          src={session.user?.image!}
          alt="User's profile picture"
          width={48}
          height={48}
          className='mx-auto mb-2 h-12 w-12 cursor-pointer rounded-full hover:opacity-50'
          onClick={() => signOut()}
        />
      )}
    </div>
  );
}

export default SideBar;
