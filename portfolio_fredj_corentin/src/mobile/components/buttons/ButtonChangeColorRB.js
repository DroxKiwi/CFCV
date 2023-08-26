import { DiHtml5 } from "react-icons/di";
import { useState } from "react";

export default function ButtonRed (props){
    // state
    const [color, setColor] = useState("red")

    // function
    const handleColor = () => {
        if (color === "red"){
            setColor("blue")
        }
        else if (color === "blue"){
            setColor("red")
        }
    }

    // render
    return (
        <button onClick={() => {props.onClickBtn(); handleColor();}} className={`bg-${color}-500 cursor-pointer touch-pan-left px-5 py-2 rounded-md`}>
            <DiHtml5/>
        </button>
    )
}