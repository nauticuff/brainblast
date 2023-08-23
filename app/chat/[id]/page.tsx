import { getServerSession } from 'next-auth'
import { notFound, redirect } from 'next/navigation'

// import { getChat } from '@/app/actions'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: ChatPageProps) {

  const session = await getServerSession()
  

  // if (!session?.user) {
  //   redirect(`/sign-in?next=/chat/${params.id}`)
  // }

  // const chat = await getChat(params.id, session.user.id)

  // if (!chat) {
  //   notFound()
  // }

  // if (chat?.userId !== session?.user?.id) {
  //   notFound()
  // }

  // return <Chat id={chat.id} initialMessages={chat.messages} />
  return (
    <div>Hello World</div>
  )

}
