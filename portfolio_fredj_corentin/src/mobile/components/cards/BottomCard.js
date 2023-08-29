import { useRef } from "react";
import { GiClick } from "react-icons/gi";
import './BottomCard.css'

export default function BottomCardTest (props) {
        // state

        const AnimRef = useRef(null)
        const activeAnimation = () => {
            AnimRef.current.classList.toggle("active")
        }
    
        // render
    
        return (
            <div>
                <div ref={AnimRef} onClick={activeAnimation} className="bottomCard block bg-slate-800 inset-x-0 bottom-0 fixed w-full z-0 overflow-visible cursor-pointer hover:shadow-inner hover:shadow-gray-50/50 rounded-md">
                    <div className={`grid justify-center animate-bounce hand ${props.class}`}>
                        <span className="" style={{fontSize: '50px'}}><GiClick/></span>
                    </div>
                    <div className="grid justify-items-center flex items-center">
                        <h2 className="textBotCard text-lg p-5 text-center text-blue-100 text-b-xl font-mono text-xl">Corentin Fredj</h2>
                        <h2 className="textBotCard text-lg p-5 text-center text-blue-100">Développeur Web/Mobile full stack</h2>
                        <h2 className="textBotCard text-lg p-5 text-center text-blue-100">Pour toute demande de projet, n'hésitez pas à me contacter par Email !</h2>
                        <h2 className="textBotCard text-lg p-5 text-center animate-pulse text-blue-300">corentinfredj.dev@gmail.com</h2>
                        <h2 className="textBotCard text-sm p-5 text-center text-blue-100">Portfolio réalisé avec ReactJS</h2>
                    </div>
                </div>
            </div>
        )
}