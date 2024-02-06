import Pixel from "./Pixel/pixel"
import TypeTextEffect from "./TypeTextEffect/TypeTextEffect"

const Hero = () => {
    return (
        <div className="relative h-full w-full">
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr]">
                <div className="hidden md:block w-full h-[100vh]">
                    <div className="w-full h-full flex justify-center items-center">
                        <TypeTextEffect Text={['你好，我是辉','Hello, My name Huy', 'Xin chào, Mình là Huy']}/>
                    </div>
                </div>
                <div className="w-full h-[100vh] flex flex-col justify-center items-center">
                    <div className='block md:hidden my-4'>
                        <div className="w-full h-full flex justify-center items-center ml-3">
                            <TypeTextEffect Text={['你好，我是辉','Hello, My name Huy', 'Xin chào, Mình là Huy']}/>
                        </div>
                    </div>
                    <Pixel />
                </div>
            </div>
        </div>
    )
}
export default Hero