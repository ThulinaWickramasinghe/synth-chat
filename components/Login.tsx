'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#74AA9C] h-screen flex flex-col items-center justify-center text-center">
        <Image
        src="/chatgpt-logo.svg"
        alt="ChaGPT logo"
        width={125}
        height={125}
        
        />
        <button onClick={() => signIn('google')} className="text-white font-bold text-3xl animate-pulse py-10">Sign In to use ChatGPT</button>
    </div>
  )
}

export default Login