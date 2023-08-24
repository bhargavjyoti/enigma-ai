import Image from "next/image"
import errImg from "@/public/404-image.jpg"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Image src={errImg} alt="404 Image" width={400} height={400} />
    </div>
  )
}

export default notfound