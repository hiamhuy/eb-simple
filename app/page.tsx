'use client'
import { useState } from "react";
import Flippingbook from "./components/Flippingbook/flippingbook";

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
      <section className="w-[100vw] h-[100vh]">
        <div className="relative h-full w-full flex justify-center items-center">
          <Flippingbook />
        </div>
      </section>
   </div>
  );
}
