'use client';

import { db } from '@/firebase';
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
  );

  useEffect(() => {
    if (!pathName) return;

    setActive(pathName.includes(id));
  }, [pathName]);

  //TODO: return to home page only if the selected chat was deleted
  const removeChat = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
    router.replace('/');
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow ${active && 'bg-gray-700/50'} my-1`}
    >
      <ChatBubbleLeftIcon className='h-5 w-5' />
      <p className='hidden flex-1 truncate md:inline-flex'>
        {messages?.docs[messages?.docs.length - 1]?.data().text || 'Empty Chat'}
      </p>
      <TrashIcon
        onClick={removeChat}
        className='h-5 w-5 text-gray-700 hover:text-red-700'
      />
    </Link>
  );
}

export default ChatRow;
