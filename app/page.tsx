'use client'
import Hero from "./components/Hero";
import Bubbles from "./components/Bubbles/Bubbles";
import { useState } from "react";
import Typewriter from "./components/TextTypewriter/Typewriter";
import ChatBot from "./components/ChatBot/ChatBot";

export default function Home() {
  const [loading, setLoading] = useState(true)

  const wait = async(ms: number) =>{
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const LoadingPage = async () => {
    setLoading(true)
    try {
      const time = 5000
      const startTime = Date.now()
      await wait(time)

      const endTime = Date.now()
      const elapsedTime = endTime - startTime

      const remainingTime = Math.max(0, time - elapsedTime)
      await wait(remainingTime)

      setLoading(false)
    } catch (error) {
      console.error('Error loading page:', error)
      setLoading(false)
    }
  };

  const container:React.CSSProperties = {
    height:'100vh',
    scrollBehavior:'smooth',
    scrollSnapType:'y mandatory',
    overflowY:'auto',
    scrollbarWidth:'none'

  }
  return (
   <div className="overflow-hidden">
      <section>
        <div className="relative h-full w-full flex justify-center items-center">
          <ChatBot />
        </div>
      </section>
   </div>
  );
}
