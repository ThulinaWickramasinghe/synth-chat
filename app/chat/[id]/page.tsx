import Chat from '@/components/Chat';
import ChatHeader from '@/components/ChatHeader';
import ChatInput from '@/components/ChatInput';

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  return (
    <div className='flex h-screen flex-col overflow-hidden '>
      <ChatHeader chatId={id} />
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
