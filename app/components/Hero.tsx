import Pixel from "./Pixel/pixel"

const Hero = () => {
    return (
        <div className="relative h-full w-full">
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr]">
                <div className="hidden md:block w-full h-[100vh]">
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className='text-[32px]'>Xin chào, Tớ là tớ</h1>
                    </div>
                </div>
                <div className="w-full h-[100vh] flex flex-col justify-center items-center">
                    <h1 className='block md:hidden text-[32px]'>Xin chào, Tớ là tớ</h1>
                    <Pixel />
                </div>
            </div>
        </div>
    )
}
export default Hero