import React from "react";
import { useRef, useState, useEffect } from "react";
import './FlipCard.css';
//import './MousehoverTooltip.css'
import './Tooltip.css'


export default function ProjectCard (props){
    // state
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [faceStart, setFaceStart] = useState("front")
    const [faceEnd, setFaceEnd] = useState("back")

    // function

    const callbackfunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        if (isVisible){
            setFaceStart("back")
            setFaceEnd("front")
        }
        else {
            setFaceStart("front")
            setFaceEnd("back")
        }
    }
    const options = {
        root:null,
        rootMargin: "50px",
        threshold: 1
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackfunction, options)
        if (containerRef.current){
            observer.observe(containerRef.current)
        }
        return () => {
            if(containerRef.current){
                observer.unobserve(containerRef.current)
            }
        }
    }, [containerRef, options])



    // render

    if (props.image === null){
        return (
            <div class="grid justify-content-center card">
                <div ref={containerRef} style={{borderRadius: `25px`}} onClick={() => {props.onClickBtn()}} className={`card-side ${faceStart} group/edit cursor-pointer ${props.class}`}>
                    <span style={{fontSize: '150px'}}>{props.icone}</span>
                    <h4>{props.frontText}</h4>
                </div>
                <div ref={containerRef} id="custooltip" data-tooltip={props.backContent} style={{ backgroundImage: `url(${props.backImage})`, backgroundSize: `cover`, borderRadius: `25px`}} onClick={() => {props.onClickBtn()}} className={`card-side ${faceEnd} group/edit cursor-pointer ${props.class}`}>
                </div>
            </div>
        )
    }
    else {
        return (
            <div class="grid justify-content-center card">
                <div ref={containerRef} style={{borderRadius: `25px`}} onClick={() => {props.onClickBtn()}} className={`card-side ${faceStart} group/edit cursor-pointer ${props.class}`}>
                    <img className="imgSize" src={props.image}/>
                    <h4>{props.frontText}</h4>
                </div>
                <div ref={containerRef} id="custooltip" data-tooltip={props.backContent} style={{ backgroundImage: `url(${props.backImage})`, backgroundSize: `cover`, borderRadius: `25px`}} onClick={() => {props.onClickBtn()}} className={`card-side ${faceEnd} group/edit cursor-pointer ${props.class}`}>
                </div>
            </div>
        )
    }
}