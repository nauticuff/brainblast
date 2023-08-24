import { cn } from "@/lib/utils"

export default function SunIcon({ color}: { color: string}) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13Z" stroke={color}/>
      <path d="M9 1V2" stroke="black" strokeLinecap="round"/>
      <path d="M9 16V17" stroke="black" strokeLinecap="round"/>
      <path d="M17 9H16" stroke="black" strokeLinecap="round"/>
      <path d="M2 9H1" stroke="black" strokeLinecap="round"/>
      <path d="M15 3L14 4" stroke="black" strokeLinecap="round"/>
      <path d="M4 14L3 15" stroke="black" strokeLinecap="round"/>
      <path d="M15 15L14 14" stroke="black" strokeLinecap="round"/>
      <path d="M4 4L3 3" stroke="black" strokeLinecap="round"/>
    </svg>
  )
}
