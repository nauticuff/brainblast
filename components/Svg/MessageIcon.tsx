// import { cn } from "@/lib/utils"

interface MessageIconProps {
  className?: string;
}

export default function MessageIcon({className}: MessageIconProps) {
  return (
    <svg className={className} width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.0625 13V9.47059H1V1H12V9.47059H6.5L3.0625 13Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
