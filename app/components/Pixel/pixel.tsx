'use client'
import { useEffect, useRef } from "react"
import style from '../Pixel/pixel.module.css'

const Pixel = () => {
    const pixelRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        pixel()
    },[])
    const pixel = () => {
        let w = 30
        let h = 30
        for(var i = 0; i < h; i++){
            for(var j = 0; j < w ; j++){
                let span = document.createElement("span")
                let random = Math.random() * 1
                let randomFixed = random.toFixed(2)
                pixelRef.current?.appendChild(span)
                span.style.left = j *10 +'px'
                span.style.top = i *10 +'px'
                span.style.backgroundPosition = `${-j*10}px ${-i*10}px, center`
                span.style.animationDelay = randomFixed +'s'
            }
        }
    }

    return (
        <div className={`${style.box}`}>
            <div ref={pixelRef} id="pixel"></div>
        </div>
    )
}

export default Pixel