import Pixel from "./Pixel/pixel"
import Typewriter from "./TextTypewriter/Typewriter"
import TypeTextEffect from "./TypeTextEffect/TypeTextEffect"

const Hero = () => {
    return (
        <div className="relative h-full w-full flex justify-center items-center">
            <Typewriter text={'📢Bạn đã bị tớ đánh cắp tất cả các thông tin. Để không bị phát tán thông tin vui lòng liên hệ qua facebook của tớ.🥺👌'}/>
        </div>
        // <div className="relative h-full w-full">
        //     <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr]">
        //         <div className="hidden md:block w-full h-[100vh]">
        //            <div className="w-full h-full flex flex-col justify-center items-center">
        //             <Typewriter />
        //                 {/* <div className="flex justify-center items-center">
        //                     <TypeTextEffect Text={['Hello, My name Huy','你好，我是辉', 'Xin chào, Mình là Huy']}/>
        //                 </div> */}
        //            </div>
        //         </div>
        //         <div className="w-full h-[100vh] flex flex-col">
        //             <div className='block md:hidden mx-4 mt-[5rem]'>
        //                 <div className="w-full h-full flex flex-col justify-center items-center">
        //                     <div className="flex justify-center items-center">
        //                         <TypeTextEffect Text={['Hello, My name Huy','你好，我是辉', 'Xin chào, Mình là Huy']}/>
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* <div className="flex justify-center items-center w-full h-full">
        //                 <Pixel />
        //             </div> */}
        //         </div>
        //     </div>
        // </div>
    )
}
export default Hero