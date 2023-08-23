import Image from "next/image"
import errImg from "@/public/404-image.jpg"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Image src={errImg} alt="404 Image" width={400} height={400} />
        <Link href="/">
            <Button variant="outline" className="md:text-lg p-4 md:p-6 rounded-full font-semibold text-white bg-[#dd720e]">Go To Homepage</Button>
        </Link>
    </div>
  )
}

export default notfound