'use client'
import { useEffect, useRef, useState } from "react"
import Bubbles from "../Bubbles/Bubbles"
interface TypewriterProps {
    text:string
}
const Typewriter = ({text} : TypewriterProps) => {
    const pRef = useRef<HTMLDivElement>(null)
    const [isShow, setShow] = useState(false)
    const [isTimeRemove, setTimeRemove] = useState(false)
    const [isTron, setTron] = useState(false)
    const [timeCount, setTimeCount] = useState(9)

    const writeText = (element:any, textInput:string, i = 0) => {
        if(element.current){
            if(i === 0){
                element.current.textContent = null
            }
            element.current.textContent += textInput[i]
    
           if(i === textInput.length - 1){
            //    setShow(true)
                return
           }
           setTimeout( () => { writeText(pRef, textInput, i+1) }, 80)
        } 
    }
    useEffect(() => {
        // setTron(false)
        return (() => {
            // writeText(pRef, text)
        })
    }, [])

    const HandleClick = () => {
        setShow(false)
        setTimeRemove(true)
    }
    useEffect(() => {
        const maxCount = 9;
        if(isTimeRemove && timeCount > 0) {
            const interval = setInterval(() => {
                if (timeCount <= maxCount && timeCount > 0) {
                    setTimeCount((prevCount) => prevCount - 1);
        
                }
              }, 3000);
              return () => clearInterval(interval);
        }
        if(timeCount === 0){
            setTron(true)
        }
    },[isTimeRemove, timeCount])

    return (
        <div className="px-[3rem] flex flex-col justify-center items-center gap-2">
                <p ref={pRef} className="text-wrap text-[28px]">{text}</p>
                {/* {
                isShow && (
                    <div className="flex flex-col gap-2">
                        <div>hoặc</div>
                        <div className="w-[150px] h-[50px]">
                            <button onClick={HandleClick}
                                className="w-[140px] h-[40px] shadow-2xl bg-sky-600 outline outline-offset-2 outline-1 outline-sky-600 hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]"
                            >
                                Bấm vào đây.
                            </button>
                        </div>
                    </div>
                )}
                {
                    isTimeRemove && (
                        <div className="text-[20px]">Sau <span className="bg-blue-900 p-1 font-semibold text-[20px]">00:0{timeCount}s</span> thông tin của bạn sẽ được xóa sạch sẽ như OMO matich. Sạch không tình vết</div>
                    )
                }
                {
                    isTron && (
                        <div className="flex flex-col justify-center items-center">
                        <Bubbles />
                        <h1 className="text-[36px]">Trôn Việt Nam, Trôn Việt Nam 🤞🏼🤞🏼🤞🏼</h1>
                        <img src="https://petto.vn/wp-content/uploads/2019/03/InstaSave3-1-300x300.jpg?v=1598607287" alt="f" />
                        </div>
                    )
                } */}
        </div>
    )
}

export default Typewriter