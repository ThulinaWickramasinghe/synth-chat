import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChatGPT',
  description: 'A chat gpt clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='flex'>
          {/* Sidebar */}
          {/* Client Provider  */}
          <div className='flex-1 bg-[#343541]'>{children}</div>
        </div>
      </body>
    </html>
  );
}
