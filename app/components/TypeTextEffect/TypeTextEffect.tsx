'use client'
import style from '../TypeTextEffect/typetext.module.css'
interface TypeTextEffectProps{
    Text:string[]
}
const TypeTextEffect = ({Text}: TypeTextEffectProps) => {
    const lengths = Text.map(item => item.length);
    const maxLength = Math.max(...lengths);

    const styleAnimation:React.CSSProperties = {
        ['--count-text' as any]:Text.length,
        ['--length-text' as any]: maxLength,
        ['--time-slide' as any]: `${Text.length*8}s`
    }
    return(
        <div className={`${style.container}`}>
            <ul style={styleAnimation}>
                {
                    Text && Text.map((item, idx) => (
                        <li key={idx}>
                            <span>{item}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TypeTextEffect