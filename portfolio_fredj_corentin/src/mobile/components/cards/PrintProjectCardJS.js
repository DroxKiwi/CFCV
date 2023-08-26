export default function printProjectCardJS () {
    return (`
import React, {Component} from "react";
import './FlipCard.css';
import './MousehoverTooltip.css'


export default function ProjectCard (props){
    // state

    // function


    // render

    if (props.image === null){
        return (
            <div class="grid justify-content-center card">
                <div style={{borderRadius: '25px'}} onClick={() => {props.onClickBtn()}} className={'card-side front group/edit cursor-pointer grid justify-items-center flex items-center bg-slate-800 w-[250px] h-[250px] shadow-lg shadow-gray-950/50 {props.class}'}>
                    <span style={{fontSize: '150px'}}>{props.icone}</span>
                    <h4>{props.frontText}</h4>
                </div>
                <div id="custooltip" data-tooltip={props.backContent} style={{ backgroundImage: 'url({props.backImage})', backgroundSize: 'cover', borderRadius: '25px'}} onClick={() => {props.onClickBtn()}} className={'card-side back group/edit cursor-pointer grid justify-items-center flex items-center bg-slate-600 shadow-lg shadow-gray-950/50 {props.class}'}>
                </div>
            </div>
        )
    }
    else {
        return (
            <div class="grid justify-content-center card">
                <div style={{borderRadius: '25px'}} onClick={() => {props.onClickBtn()}} className={'card-side front group/edit cursor-pointer grid justify-items-center flex items-center bg-slate-800 w-[250px] h-[250px] shadow-lg shadow-gray-950/50 {props.class}'}>
                    <img className="max-w-[80%]" src={props.image}/>
                    <h4>{props.frontText}</h4>
                </div>
                <div id="custooltip" data-tooltip={props.backContent} style={{ backgroundImage: 'url({props.backImage})', backgroundSize: 'cover', borderRadius: '25px'}} onClick={() => {props.onClickBtn()}} className={'card-side back group/edit cursor-pointer grid justify-items-center flex items-center bg-slate-600 shadow-lg shadow-gray-950/50 {props.class}'}>
                </div>
            </div>
        )
    }
}
    `)
}