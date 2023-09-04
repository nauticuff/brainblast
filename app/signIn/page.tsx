'use client'

import { getProviders, signIn } from "next-auth/react"
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { title } from "process";

export default function SignIn() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false)

  const { toast } = useToast()

  async function clientGetProviders() {
    const providers = await getProviders();
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

  function signInGithub() {
    try {
      setIsGithubLoading(true)
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'There was a problem signing in with GitHub.',
        variant: 'destructive'
      })
    } finally {
      setIsGithubLoading(false)
    }
  }

  function signInWithGoogle() {
    try {
      setIsGoogleLoading(true)
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'There was a problem signing in with Google.',
        variant: 'destructive'
      })
    } finally {
      setIsGoogleLoading(false)
    }
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
          {isGithubLoading ?
            <button
              className="bg-slate-500 text-white py-2 px-3"
              onClick={() => handleCredentials(username, password)}
            >
              //github logo here
              Sign In with Credentials
            </button>
            :
            <button
              className="bg-slate-500 text-white py-2 px-3"
              onClick={() => handleCredentials(username, password)}
            >
              //spinner here
              Sign In with Credentials
            </button>
          }

          <button
            className="bg-slate-500 text-white py-2 px-3"
          >
            Sign in with Google
          </button>
        </div>
      </div>

    </>
  )
}