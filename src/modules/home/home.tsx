'use client'
import { trpc } from "@/trpc/client"
import Image from "next/image"


function Home() {
  const { data } = trpc.hello.useQuery({text: "AntonioZ"})
  return (
    <div >
        Client Component says: {data?.greeting}
    </div>
  )
}

export default Home 