'use client'

import { PlusIcon } from './ui/icons'
import SendIcon from './Svg/SendIcon'
import Textarea from 'react-textarea-autosize'
import { Tooltip } from 'react-tooltip'

interface FooterProps {
  dataState: boolean;
}

export default function Footer({dataState}: FooterProps) {

  return (
    <>
      <Tooltip
        id="new-chat"
        className='z-10'
        place='top'
      />
      <Tooltip
        id="send-message"
        className='z-10'
        place='top'
      />
      <div className={`fixed inset-x-0 bottom-0 border-t sm:border-t-0 sm:pb-4 sm:px-4 md:px-0 ${dataState ? 'lg:pl-[250px] xl:pl-[300px] transition-all duration-300' : 'transition-all duration-300'}`}>
        <div className="relative py-5 max-h-60 px-14 flex flex-col grow overflow-hidden shadow-sm bg-white mx-auto sm:max-w-[calc(640px)] sm:border sm:rounded-lg">
          <button
            aria-label='start a new chat'
            className='absolute left-4 top-3 inline-flex justify-center items-center h-8 w-8 border p-2 shadow ring-offset-black rounded-full hover:bg-black/5'
            data-tooltip-id="new-chat"
            data-tooltip-content="New Chat"
          >
            <PlusIcon />
          </button>
          <Textarea
            className='chat-scrollbar w-full px-4 resize-none focus-within:outline-none sm:text-sm'
            rows={1}
            spellCheck={false}
            aria-label='chat input box'
            placeholder='Send a message'
          >
          </Textarea>
          {/* </div> */}
          <button
            className='absolute right-4 top-3 p-2 rounded-md transition-opacity bg-gray-900 shadow-md '
            aria-label='send chat message'
            data-tooltip-id="send-message"
            data-tooltip-content="Send Message"
          >
            <SendIcon color='white' />
          </button>
        </div>
      </div>
    </>
  )
}
