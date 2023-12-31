"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, MessageSquare, ImageIcon, Code } from "lucide-react"
import { useRouter } from "next/navigation"

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10"
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
    bgColor: "bg-green-700/10"
  },
]



export default function HomePage(){
  const router = useRouter();


  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl font-bold text-center md:text-4xl">Enigma AI is at your service</h2>
        <p className="text-muted-foreground font-light text-sm text-center md:text-lg">Start a chat right now to see the power of Enigma AI</p>
      </div>
      <div className="px-4 space-y-4 md:px-20 lg:px-32">
        {tools.map(tool => (
          <Card key={tool.href} onClick={() => router.push(tool.href)} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="h-5 w-5" />
          </Card>
        ))}
      </div>
    </>
  )
}
