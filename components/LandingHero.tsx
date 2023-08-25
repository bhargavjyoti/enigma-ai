"use client";

import { useAuth } from "@clerk/nextjs"
import Link from "next/link";
import TypewriterComponent from "typewriter-effect"
import { Button } from "@/components/ui/button";

const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
                <h1>Unleash the Power of AI: Creating</h1>
                <div className="text-[#dd720e]">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Code.",
                                "Conversations.",
                                "Images."
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div> 
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Create content using AI 10x faster.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="ghost" className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-[#dd720e]">Get Started For Free</Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingHero