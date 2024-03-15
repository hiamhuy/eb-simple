import Image from "next/image"
import ava from "./image/poster.png"

const AvatarMe = () => {
    return (
        <div className="w-[40px] h-[40px] flex justify-center items-center relative rounded-full">
            <Image 
            className="absolute rounded-full bg-cover flex !w-[70px] !h-[70px] !max-w-[70px]"
            width={100} height={100} quality={100}
            loading={'lazy'} src={ava} alt=""/>
        </div>
    )
}

export default AvatarMe