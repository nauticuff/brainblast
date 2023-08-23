'use client'

import { getProviders, signIn } from "next-auth/react"
import { useState } from "react";

export default function SignIn() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function clientGetProviders() {
    const providers = await getProviders();
    console.log(providers)
    return providers;
  }

  clientGetProviders()

  function handleUsername(username: string) {
    setUsername(username)
  }

  function handlePassword(password: string) {
    setUsername(password)
  }

  async function handleCredentials(username: string, password: string) {
    signIn('credentials', {
      username: username,
      password: password,
      redirect: true,
      callbackUrl: '/'
    })
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <div className="w-[380px] flex justify-content flex-col">
          <h1 className="text-2xl font-bold mb-3">Welcome back!</h1>
          <h2 className="text-bold mb-2">Login with one of these accounts</h2>
          <button
            className="bg-slate-500 text-white py-2 px-3"
            onClick={() => signIn('github')}
          >
            GitHub
          </button>
          <label aria-labelledby="username">Username:</label>
          <input type='text' className="text-black" onChange={e => handleUsername(e.target.value)} id="username" placeholder="username">
          </input>
          <label aria-labelledby="password">Password:</label>
          <input type='password' className="text-black" onChange={e => handlePassword(e.target.value)} id="password" placeholder="password">
          </input>
          <button
            className="bg-slate-500 text-white py-2 px-3"
            onClick={() => handleCredentials(username, password)}
          >
            Sign In with Credentials
          </button>
        </div>
      </div>

    </>
  )
}

// export async function getServerSideProps(context) {
//   const providers = await getProviders()
//   return {
//     props: { providers },
//   }
// }