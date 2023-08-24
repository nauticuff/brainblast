'use client'

import { useState, useRef, SetStateAction } from 'react';
import MenuIcon from './Svg/MenuIcon';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MessageIcon from './Svg/MessageIcon';

interface HeaderProps {
  dataState: boolean;
  setDataState: React.Dispatch<SetStateAction<boolean>>
}

export default function Header({ setDataState, dataState }: HeaderProps) {

  const headerRef = useRef<HTMLHeadingElement>(null)

  // const [data, setData] = useState(false)

  const [position, setPosition] = useState('absolute')
  const [navbarTop, setNavbarTop] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const handleScroll = () => {

    const supportPageOffset = window.scrollY !== undefined
    const currentScrollPos = supportPageOffset ? window.scrollY : document.documentElement.scrollTop;

    if (currentScrollPos <= 0) {
      setPosition('absolute')
      setNavbarTop(0);
      setLastScrollPosition(0);
    } else {
      if (currentScrollPos > lastScrollPosition) {
        setPosition('absolute')
        let { top, height } = headerRef.current?.getBoundingClientRect() as DOMRect;
        if (top < -height) {
          top = -height;
        }
        setNavbarTop(currentScrollPos + top);
      } else if (currentScrollPos < lastScrollPosition) {
        const { top } = headerRef.current?.getBoundingClientRect() as DOMRect;

        if (top >= 0) {
          setNavbarTop(0);
          setPosition('fixed')
        }
      }
      setLastScrollPosition(currentScrollPos)
    };
  }

  try {
    window.addEventListener('scroll', handleScroll, { passive: true });
  } catch (error) { }

  return (
    <header ref={headerRef} style={{ top: `${navbarTop}px` }} className={` ${position} h-16 left-0 w-full lg flex bg-white justify-between items-center p-4 border-b border-[#E5E7EB]`}>
      <Sheet>
        <SheetTrigger className='px-1 lg:hidden'>
          <MenuIcon color='black' />
        </SheetTrigger>
        <SheetContent side='left' className='sidebar w-[300px] lg:inset-y-0 lg:top-16'>
          <SheetHeader>
            <div className='relative'>
              <MessageIcon className='absolute left-2 top-[11px]' />
              <button className='px-8 py-1'>
                How to center a div
              </button>
            </div>
            <div className='relative'>
              <MessageIcon className='absolute left-2 top-[11px]' />
              <button className='px-8 py-1'>
                How to center a div
              </button>
            </div>
            <div className='relative'>
              <MessageIcon className='absolute left-2 top-[11px]' />
              <button className='px-8 py-1'>
                How to center a div
              </button>
            </div>
            {/* <SheetDescription>
              <button className='flex items-center gap-2'>
                <MessageIcon />
                How to center a div
              </button>
            </SheetDescription> */}
          </SheetHeader>
          {/* {children} */}
        </SheetContent>
      </Sheet>
      <button onClick={() => setDataState(!dataState)} className='hidden lg:flex'>
        <MenuIcon color='black'/>
      </button>
      <button>
        Login
      </button>
    </header>
  )
}
