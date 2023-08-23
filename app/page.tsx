'use client'

import Image from 'next/image'
import QuillSvg from '@/public/quill.svg'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react';

export default function Home() {

  const [dataState, setDataState] = useState(false);

  const exampleMessages = [
    {
      heading: 'Explain technical concepts',
      message: `What is a "serverless function"?`
    },
    {
      heading: 'Summarize an article',
      message: 'Summarize the following article for a 2nd grader: \n'
    },
    {
      heading: 'Draft an email',
      message: `Draft an email to my boss about the following: \n`
    }
  ]

  return (
    <div className="bg-[#F8F8F8] pt-20 md:pt-[6.5rem] min-h-screen">
      <Header dataState={dataState} setDataState={setDataState}/>
      <div className={`${dataState ? 'lg:pl-[250px] xl:pl-[300px] transition-all duration-300' : 'transition-all duration-300'}`}>
        <div className='bg-red-400 peer absolute bottom-0 transition-all -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px] h-[calc(100%-64px)] flex-col'>
          hello
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
