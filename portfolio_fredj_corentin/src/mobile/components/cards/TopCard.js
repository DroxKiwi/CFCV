import pp from "../../assets/PhotoProfil.png";
import './TopCard.css'

export default function TopCard (){
    // state

    // function

    // render

    const tooltipImg = "Corentin Fredj → Développeur web full stack"

    return (
        <div className="bg-slate-800 grid justify-items-center flex items-center p-5 shadow-lg shadow-gray-950/50 fixed w-full z-10 h-[16%] containerTop">
            <img className="h-[150px] w-[150] rounded-full m-10 shadow-lg shadow-gray-950/50 pp" src={pp} alt=""/>
        </div>
    )
}