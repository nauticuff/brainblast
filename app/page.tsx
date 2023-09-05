'use client'

import Image from 'next/image'
import QuillSvg from '@/public/quill.svg'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { QuillIcon, SendIcon, MenuIcon, ExitMenuIcon } from '@/components/ui/icons'

// import { MessageIcon } from '@/components/ui/icons'

export default function Home() {

  const [dataState, setDataState] = useState(false);
  const [hideDelayed, setHideDelayed] = useState(false);

  useEffect(() => {
    if (!dataState) {
      const timeout = setTimeout(() => {
        setHideDelayed(true);
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setHideDelayed(false)
    } 
  }, [dataState]);

  const exampleMessages = [
    {
      id: 1,
      heading: 'Explain technical concepts',
      message: 'What is a "serverless function"?'
    },
    {
      id: 2,
      heading: 'Summarize an article',
      message: 'Summarize the following article for a 2nd grader: \n'
    },
    {
      id: 3,
      heading: 'Draft an email',
      message: 'Draft an email to my boss about the following: \n'
    }
  ]

  return (
    <div className="bg-[#F8F8F8] pt-20 md:pt-[6.5rem] min-h-screen">
      <Header dataState={dataState} setDataState={setDataState}/>
      <div className={`${dataState ? 'lg:pl-[250px] xl:pl-[300px] transition-all duration-300' : 'transition-all duration-300'}`}>
        <div className={`${hideDelayed ? 'lg:hidden' : ''} bg-muted absolute bottom-0 transition-all -translate-x-full border-r duration-300 lg:flex lg:w-[250px] xl:w-[300px] h-[calc(100%-64px)] flex-col`}>
          <div className='p-4'>
            <p className='font-semibold text-sm'>Chat History</p>
          </div>
          <div className='sidebar-scrollbar flex-1 overflow-auto'>
            {exampleMessages.map((item) => (
              <div key={item.id} className='px-4'>
                <p className='text-sm'>{item.heading.slice(0, 10) + '...'}</p>
              </div>
            ))}
            <div className='h-44 w-full'>
              <Link  href='#home'>Yo</Link>
            </div>
            <div className='h-44 w-full'>
              <Link  href='#home2'>Yo</Link>
            </div>
            <div className='h-44 w-full'>
              <Link  href='#home3'>Yo</Link>
            </div>
            <div className='h-44 w-full'>
              <Link  href='#home4'>Yo</Link>
            </div>
            <div className='h-44 w-full'>
              <Link  href='#home5'>Yo</Link>
            </div>
            <div className='h-44 w-full'>
              <Link  href='#home6'>Yo</Link>
            </div>
            <div className='h-44 w-full'>
              <Link  href='#home7'>Yo</Link>
            </div>
            <div className='h-44 w-full'>
              <Link  href='#home8'>Yo</Link>
            </div>
            <div className='h-44 w-full'>
              <Link  href='#home9'>Yo</Link>
            </div>
            <div className='h-44 w-full'>
              <Link  href='#home10'>Yo</Link>
            </div>
          </div>
          <div className='flex items-center justify-between p-4'>
            <button></button>
            <button>
              Clear History
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 relative h-full">
          <div className="rounded-lg border p-8 bg-white">
            <h1 className="mb-2 text-xl font-semibold">
              Welcome to BrainBlast!
            </h1>
            <p className="mb-2 text-gray-500">
              This is an AI Chatbot app that utilizes Prisma, Supabase, Next.js and Next-Auth to provide key features and authentication.
            </p>
            <p className='text-gray-500'>
              Start a conversation below or click on an example to start.
            </p>
            <div className="mt-4 flex flex-col items-start gap-2">
              {exampleMessages.map((message, index) => (
                <button
                  key={index}
                  className="flex items-center px-1 link-hover text-gray-700 font-medium"
                >
                  <Image className="mr-2" src={QuillSvg} alt='quill icon' height={20} width={20}></Image>
                  {message.heading}
                </button>
              ))}
            </div>
          </div>
          <Footer dataState={dataState}/>
        </div>
      </div>
    </div>
  )
}