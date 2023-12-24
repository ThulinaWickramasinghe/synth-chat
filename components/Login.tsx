'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-[#74AA9C] text-center'>
      <Image
        src='/chatgpt-logo.svg'
        alt='ChaGPT logo'
        width={125}
        height={125}
      />
      <button
        onClick={() => signIn('google')}
        className='animate-pulse py-10 text-3xl font-bold text-white'
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
