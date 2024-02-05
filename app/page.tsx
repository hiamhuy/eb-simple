import Image from "next/image";
import Hero from "./components/Hero";
import Animate from "./components/Animate";
import Bubbles from "./components/Bubbles/Bubbles";

export default function Home() {
  const container:React.CSSProperties = {
    height:'100vh',
    scrollBehavior:'smooth',
    scrollSnapType:'y mandatory',
    overflowY:'auto',
    scrollbarWidth:'none'

  }
  return (
   <div style={container}>
      <Bubbles />
      <section>
        <Hero />
      </section>
      {/* <section>
        <Animate />
      </section> */}
   </div>
  );
}
