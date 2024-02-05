import * as THREE from 'three';

// const scene = new THREE.Scene();

const Hero = () => {
    return (
        <div className="relative h-full w-full">
            <video autoPlay muted playsInline loop className="absolute opacity-[0.4] z-[-1] object-cover w-full h-full">
                <source src='/background/cards-video.webm' type='video/webm'/>
            </video>

            <div className="w-full h-full flex justify-center items-center m-auto">
                <h1 className='text-[32px]'>Hello guys</h1>
            </div>
        </div>
    )
}
export default Hero