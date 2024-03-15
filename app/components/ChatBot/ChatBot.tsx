import { useEffect, useRef, useState } from "react"

const ChatBot = () => {
    const [valueChat, setValueChat] = useState('')
    const [valueInput, setValueInput] = useState('')
    const refInput = useRef<HTMLInputElement>(null)
    const sendChat = () => {
        console.log(refInput?.current?.value)
        setValueChat(refInput?.current?.value??'')
        setValueInput('')
    }

    const handleKeyPress = (e:any) => {
        if (e.key === 'Enter') {
            setValueChat(refInput?.current?.value??'')
            setValueInput('')
        }
    };

    

    return (
        <div className="h-[520px] w-[350px] border bg-[#6D6D6D3D] border-[#6D6D6D4D] rounded-[8px]">
            <div className="w-full h-[40px] text-[14px] text-[#6D6D6D] p-2 bg-[#2d2d2d] rounded-tr-[8px] rounded-tl-[8px]">
                Chat cùng BOT Huy nè... ^^
            </div>
            <div className="h-[440px] w-full p-2 text-[13.5px]">
                {
                    valueChat
                }
            </div>
            <div className="relative h-[40px] rounded-br-[8px] rounded-bl-[8px] overflow-hidden bg-[#2d2d2d] shadow-xl w-full">
                <input
                    ref={refInput}
                    type="text"
                    name="text"
                    value={valueInput}
                    onChange={(e)=>setValueInput(e.target.value)}
                    placeholder="Hỏi gì đi..."
                    className="bg-transparent text-[14px] outline-none border-none pl-3 pr-10 py-2 w-full font-sans"
                    onKeyPress={handleKeyPress}
                />
                <div className="absolute right-1 top-[3px]">
                    <button
                    onClick={sendChat}
                    className="w-[30px] h-[30px] rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
                    >
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative z-10"
                    >
                        <path
                        d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                        fill="white"
                        fill-opacity="0.01"
                        ></path>
                        <path
                        d="M42.8496 18.7067L21.0628 44.6712"
                        stroke="white"
                        stroke-width="3.76603"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ></path>
                        <path
                        d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                        stroke="white"
                        stroke-width="3.76603"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ></path>
                    </svg>
                    <div
                        className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"
                    ></div>
                    <div
                        className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"
                    ></div>
                    </button>
                </div>
                </div>
        </div>
    )
}

export default ChatBot