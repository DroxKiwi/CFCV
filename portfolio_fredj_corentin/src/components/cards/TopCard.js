import pp from "../../assets/PhotoProfil.png";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import ButtonRect1 from '../buttons/ButtonRect1'

export default function TopCard (){
    // state

    // function

    // render

    const textStyle={
        color: "white"
    };

    return (
        <div className="bg-slate-800 p-5 shadow-lg shadow-gray-950/50 fixed w-full z-10">
            <div className="grid justify-items-center flex items-center bg-slate-800 w-full">
                <img className="h-[150px] w-[150] rounded-full m-10" src={pp}/>
                <h1 className="cursor-default" style={textStyle}>Corentin Fredj</h1>
                <h2 style={textStyle}>Développeur web full stack</h2>
            </div>
        </div>
    )
}