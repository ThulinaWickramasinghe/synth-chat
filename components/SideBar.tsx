'use client';

import { useSession, signOut } from 'next-auth/react';
import NewChat from './NewChat';
import Image from 'next/image';

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className='flex h-screen flex-col p-2'>
      <div className='flex-1'>
        <div>
          <NewChat />
          <div>{/* Model Selection */}</div>
          {/* Map chats in chat history */}
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
