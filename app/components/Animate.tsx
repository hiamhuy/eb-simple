const Animate = () => {
    return (
        <div className="relative h-full w-full">
            <video autoPlay muted loop className="object-cover w-full h-full">
                <source src='/background/background-heart.webm' type='video/webm'/>
            </video>
        </div>
    )
}
export default Animate