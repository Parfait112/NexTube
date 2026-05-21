'client'
import Image from "next/image"


function Home() {
  return (
    <div >
        <Image src='/images.png' width={50} height={50} alt="Logo" />
        <p className="text-xl font-semibold tracking-tight">NewTube</p> 
    </div>
  )
}

export default Home 