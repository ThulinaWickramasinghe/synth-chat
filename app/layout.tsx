import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SideBar from '@/components/SideBar';
import { SessionProvider } from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import ClientProvider from '@/components/ClientProvider';

export const metadata: Metadata = {
  title: 'ChatGPT',
  description: 'A chat gpt clone',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className='h-screen max-w-xs overflow-y-auto bg-[#202123] md:min-w-[20rem]'>
                <SideBar />
              </div>
              <ClientProvider />
              <div className='flex-1 bg-[#343541]'>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
