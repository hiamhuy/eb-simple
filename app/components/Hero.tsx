import Pixel from "./Pixel/pixel"

const Hero = () => {
    return (
        <div className="relative h-full w-full">
            <div className="w-full h-full flex justify-center items-center m-auto">
                {/* <div>
                  <h1 className='text-[32px]'>Hello guys</h1>
                </div> */}
                <div>
                    <Pixel />
                </div>
            </div>
        </div>
    )
}
export default Hero