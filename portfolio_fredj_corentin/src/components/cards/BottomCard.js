import { useState, useEffect, useRef } from "react";
import DragMove from "../utils/DragMove";
import { GiClick } from "react-icons/gi";


export default function BottomCard (props){

    // state

    const [translate, setTranslate] = useState({
        y: 0
      });
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1);
    const [isRunning, setIsRunning] = useState(false);
    const [open, setOpen] = useState(false)
    const [distance, setDistance] = useState(400)

    
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
                    setCount(count + 1);
                    setTranslate({
                        y: translate.y + 1
                    });
                }
                else if (count >= distance){
                    setOpen(true)
                    handleIsRunningChange()
                }
            }
            else if (open === true){
                if (count > 0){
                    setCount(count - 1);
                    setTranslate({
                        y: translate.y - 1
                    });
                }
                else if (count <= 0){
                    setOpen(false)
                    handleIsRunningChange()
                }
            }
            console.log(translate)

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
                <div style={{transform: `translateY(${translate.y}px)`}} onClick={handleIsRunningChange} className="block fixed inset-x-0 bottom-0 bg-slate-800 fixed w-full h-[480px] z-0 overflow-visible cursor-pointer hover:shadow-inner hover:shadow-gray-50/50 rounded-md">
                    <div className={`grid justify-center mt-8 animate-bounce ${props.class}`}>
                        <span style={{fontSize: '50px'}}><GiClick/></span>
                    </div>
                    <Counter/>
                </div>
            </DragMove>
        </div>
    )
}