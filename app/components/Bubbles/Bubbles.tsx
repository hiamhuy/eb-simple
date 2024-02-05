import style from "@/app/components/Bubbles/bubbles.module.css"
const Bubbles = () => {
    return (
       <div className="absolute w-full h-[100vh] overflow-hidden">
            <div className={`${style.bubbles} relative flex justify-between w-full`}>
                <span  style={{ ['--i' as any]:'11' }}></span>
                <span  style={{ ['--i' as any]:'28' }}></span>
                <span  style={{ ['--i' as any]:'15' }}></span>
                <span  style={{ ['--i' as any]:'14' }}></span>
                <span  style={{ ['--i' as any]:'20' }}></span>
                <span  style={{ ['--i' as any]:'22' }}></span>
                <span  style={{ ['--i' as any]:'24' }}></span>
                <span  style={{ ['--i' as any]:'21' }}></span>
                <span  style={{ ['--i' as any]:'10' }}></span>
            </div>
       </div>
    )
}

export default Bubbles