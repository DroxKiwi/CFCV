import { useState } from "react";
import ButtonRed from '../buttons/ButtonChangeColorRB'

export default function SideMenu (){
    // state
    const [hidden, setHidden] = useState("0")

    // function

    const handleHidden = () => {
        if (hidden === "0"){
            setHidden("100")
        }
        else if (hidden === "100"){
            setHidden("0")
        }
    }

    // render
    return (
        <div>
            <ButtonRed onClickBtn={handleHidden}/>
            <div>
                <div className={`absolute opacity-${hidden} bg-black w-full h-[500px] my-10 rounded-md`}>
                </div>
            </div>
        </div>
    )
}