import Image from "next/image"
import LoadingSVG from "@/public/Infinity.gif"

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col">
            <Image src={LoadingSVG} alt="Loading SVG" />
            <h1 className="text-xl text-center">Loading</h1>
        </div>
    </div>
  )
}

export default Loading