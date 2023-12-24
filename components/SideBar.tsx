import NewChat from './NewChat';

function SideBar() {
  return (
    <div className='flex h-screen flex-col p-2'>
      <div className='flex-1'>
        <div>
          <NewChat />
          <div>{/* Model Selection */}</div>
          {/* Map chats in chat history */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
