import { useState, useEffect, useRef } from "react";
import DragMove from "../utils/DragMove";
import { GiClick } from "react-icons/gi";
import './BottomCard.css'


export default function BottomCard (props){

    // state

    const [translate, setTranslate] = useState({
        y: 0
      });
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1);
    const [isRunning, setIsRunning] = useState(false);
    const [open, setOpen] = useState(false)
    const [distance, setDistance] = useState(85)
    const speed = 0.3
    const tick = 0.3
    
    // function

    const handleDragMove = (e) => {
        //setTranslate({
        //  y: translate.y + e.movementY
        //});
      };

    function Counter() {
      
        useInterval(() => {
            if (open === false){
                if (count < distance){
                    setCount(count + tick);
                    setTranslate({
                        y: translate.y + speed
                    });
                }
                else if (count >= distance){
                    setOpen(true)
                    handleIsRunningChange()
                }
            }
            else if (open === true){
                if (count > 0){
                    setCount(count - tick);
                    setTranslate({
                        y: translate.y - speed
                    });
                }
                else if (count <= 0){
                    setOpen(false)
                    handleIsRunningChange()
                }
            }

        }, isRunning ? delay : null);
      
        //return (
        //  <>
        //    <h1>{count}</h1>
        //    <input type="checkbox" checked={isRunning} onChange={handleIsRunningChange} /> Running
        //    <br />
        //    <input value={delay} onChange={handleDelayChange} />
        //  </>
        //);
      }

    //function handleDelayChange(e) {
    //    setDelay(Number(e.target.value));
    //  }
    
    function handleIsRunningChange(e) {
        if (isRunning === false){
            setIsRunning(true)
        }
        else if (isRunning === true){
            setIsRunning(false)
        }
      }
      
    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest function.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }

    // render

    return (
        <div>
            <DragMove onDragMove={handleDragMove}>
                <div style={{transform: `translateY(${translate.y}%)`}} onClick={handleIsRunningChange} className="block inset-x-0 bottom-0 bg-slate-800 fixed w-full h-[84%] z-0 overflow-visible cursor-pointer hover:shadow-inner hover:shadow-gray-50/50 rounded-md">
                    <div className={`grid justify-center animate-bounce hand ${props.class}`}>
                        <span className="" style={{fontSize: '50px'}}><GiClick/></span>
                    </div>
                    <div className="grid justify-center flex items-center">
                        <h2 className="text-lg p-5 text-center text-blue-100 text-b-xl font-mono text-xl">Corentin Fredj</h2>
                        <h2 className="text-lg p-5 text-center text-blue-100">Développeur Web/Mobile full stack</h2>
                        <h2 className="text-lg p-5 text-center text-blue-100">Pour toute demande de projet, n'hésitez pas à me contacter par Email !</h2>
                        <h2 className="text-lg p-5 text-center animate-pulse text-blue-300">corentinfredj.dev@gmail.com</h2>
                    </div>
                    <Counter/>
                </div>
            </DragMove>
        </div>
    )
}