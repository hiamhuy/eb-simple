import Image from "next/image";
import Hero from "./components/Hero";
import Animate from "./components/Animate";

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
      <section>
        <Hero />
      </section>
      <section>
        <Animate />
      </section>
   </div>
  );
}
