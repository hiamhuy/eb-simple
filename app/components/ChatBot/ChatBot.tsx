import { useEffect, useRef, useState } from "react"
import AvatarMe from "./avatarMe"

type BoxChat = {
    id:number,
    type:string,
    text:string
}

const ChatBot = () => {
    const [valueChat, setValueChat] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [arrayBox, setArrayBox] = useState<BoxChat[]>([])
    const refInput = useRef<HTMLInputElement>(null)

    const sendChat = () => {
        setValueChat(refInput?.current?.value??'')
        const _peo:BoxChat = {
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1,
            type:'people',
            text: refInput?.current?.value??''
        }
        setArrayBox([...arrayBox, _peo])
        setValueInput('')
    }

    // useEffect(() => {
    //     console.log({arrayBox})
    // },[arrayBox])

    useEffect(() => {
        setTimeout(() => {
            const bot:BoxChat = {
                id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1,
                type:'bot',
                text: 'Hi, Tôi là trợ lí ảo của Huy, hãy đưa tôi một câu hỏi tôi sẽ trả lại bằng một câu trả lời về câu hỏi của bạn.'
            }
            setArrayBox([...arrayBox, bot])
        },500)
    },[])

    const handleKeyPress = (e:any) => {
        if (e.key === 'Enter') {
            setValueChat(refInput?.current?.value??'')
            const _peo:BoxChat = {
                id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1,
                type:'people',
                text: refInput?.current?.value??''
            }
            setArrayBox([...arrayBox, _peo])
            setValueInput('')
        }
    };

    return (
        <div className="h-[calc(100vh-30px)] w-[calc(100vw-10px)] relative md:w-[calc(100vw-100px)] border bg-[#6D6D6D3D] border-[#6D6D6D4D] rounded-[8px]">
            <div className="w-full h-[40px] text-[14px] text-[#6D6D6D] p-2 bg-[#2d2d2d] rounded-tr-[8px] rounded-tl-[8px]">
                Chat cùng BOT của Huy nè... ^^
            </div>
            <div className="max-h-[calc(100vh-120px)] overflow-x-hidden overflow-y-auto w-full p-2 text-[14px]">
                {
                    arrayBox && arrayBox.map((item, idx) => (
                        <div key={idx} className="w-full h-full">
                            {
                                item.type === 'bot' && (
                                    <div key={Math.random()} className="flex justify-start w-full my-[10px] rounded-[10px]">
                                        <div className="w-fit break-all h-full bg-gray-950 px-3 py-3 rounded-[10px] max-w-[90%] md:max-w-[650px] lg:max-w-[980px] xl:max-w-[50%]">
                                        {
                                            item.text
                                        }
                                        </div>
                                    </div>
                                )
                            }
                            {
                                item.type === 'people' && (
                                    <div key={Math.random()} className="flex justify-end w-full my-[10px] rounded-[10px]">
                                       <div className="w-fit break-all h-full bg-blue-700 px-3 py-3 rounded-[10px] max-w-[90%] md:max-w-[650px] lg:max-w-[980px] xl:max-w-[50%]">
                                        {
                                            item.text
                                        }
                                       </div>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
            <div className="absolute bottom-0 h-[40px] rounded-br-[8px] rounded-bl-[8px] overflow-hidden bg-[#2d2d2d] shadow-xl w-full">
                <input
                    ref={refInput}
                    autoComplete="off"
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
                        fillOpacity="0.01"
                        ></path>
                        <path
                        d="M42.8496 18.7067L21.0628 44.6712"
                        stroke="white"
                        strokeWidth="3.76603"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        ></path>
                        <path
                        d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                        stroke="white"
                        strokeWidth="3.76603"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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