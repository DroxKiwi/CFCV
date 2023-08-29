import pp from "../../assets/PhotoProfil.png";
import ButtonRect1 from '../buttons/ButtonRect1';
import React from 'react';
import {ReactComponent as ReactLoader} from './../../assets/Loader.svg';

export default function Loading (){
    // state

    // function

    // render

    const textStyle={
        color: "white"
    };

    return (
        <div className="bg-slate-800 p-5 shadow-lg shadow-gray-950/50 fixed w-full h-[100vh] z-10">
            <div className="blur-sm grid justify-items-center flex items-center bg-slate-800 w-full">
                <img className="h-[150px] w-[150] rounded-full m-10" src={pp}/>
                <h1 className="cursor-default" style={textStyle}>Corentin Fredj</h1>
                <h3 style={textStyle}>Développeur web full stack</h3>
            </div>
            <div className="grid justify-items-center bg-slate-800 w-full">
                <div className="w-[150px] h-[150px]">
                    <ReactLoader/>
                </div>
                <h4 className="text-white">Chargement ...</h4>
            </div>
        </div>
    )
}