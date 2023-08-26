import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { TbPrompt } from "react-icons/tb";
import './Prompt.css'
import hljs from 'highlight.js';
import "highlight.js/styles/github.css";

import printBottomCardJS from './PrintBottomCardJS'
import printContainerJS from './PrintContainerJS'
import printPromptJS from './PrintPromptJS'
import printFlipCardCSS from './PrintFlipCardCSS'
import printMousehoverTooltipCSS from './PrintMousehoverTooltipCSS'
import printProjectCardJS from './PrintProjectCardJS'
import printButtonRect1JS from './PrintButtonRect1JS'
// Load any languages you need
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));



export default function Prompt() {

    const [command, setCommand] = useState()
    const [currentDirectory, setCurrentDirectory] = useState("~")
    const [prompt, setPrompt] = useState("@")
    const [result, setResult] = useState()
    //const [heightResultPrompt, setHeightResultPrompt] = useState(24)
    //const [heightPrompt, setHeightPrompt] = useState(144)
    const commands = ["@cd", "@ls", "@more", "@clear", "@help", "@commands"]
    const cards = "BottomCard.js Container.js FlipCard.css MousehoverTooltip.css ProjectCard.js Prompt.js"
    const buttons = "ButtonRect1.js"
    const promptTopRef = useRef(null);
    const lineSeparation = "\n________________________________________\n"
    const commandsList = `${lineSeparation}@cd:path → Change directory \n@more:filename → show file \n@ls → list directory arborescence \n@clear → clear the prompt \n@help → to get help \n@commands → to list availables commands${lineSeparation}`
    const help = `${lineSeparation}To list the availables commands type '@commands'. This symbol → @ start the command, and this one → : the options. This prompt is used to navigate into fake file aroberscence of the projet. You can see code by using @more command and the name of the file. You need to use @ symbol before enter a command${lineSeparation}`
    //const [commandsHistoric, setCommandsHistoric] = useState("")
    //const [indCmdHist, setIndCmdHist] = useState(0)
    const [renderedCode, setRenderedCode] = useState("")


    // Handle changement on prompt textarea editable tag
    const handleChange = (event) => {
        setPrompt(event.target.value);
    };

    // Cut in two parts a made command, and return an array with [command, option]
    const handleCommand = (prompt) => {
        var command = ""
        var option = ""
        var intoCommand = false
        var intoOption = false
        for (let i = 0; i < prompt.length; i++){
            if (prompt[i] === ":"){
                intoCommand = false
            }
            if (prompt[i] === "@"){
                intoCommand = true
            }
            if (prompt[i] === ":"){
                intoOption = true
            }
            if (intoCommand){
                command = command + prompt[i]
            }
            else if (intoOption){
                option = option + prompt[i]
            }
        }
        return [command, option]
    }

    // Change the current destination
    const handleChangeDirectory = (dir) => {
        dir = dir.split(':')[1]
        switch (dir){
            case "..":
                switch (currentDirectory){
                    case "~/src":
                        setCurrentDirectory("~")
                        break
                    case "~/src/components":
                        setCurrentDirectory("~/src")
                        break
                    case "~/src/components/buttons":
                        setCurrentDirectory("~/src/components")
                        break
                    case "~/src/components/cards":
                        setCurrentDirectory("~/src/components")
                        break
                    default:
                        setResult(result+"\n"+"It's already the root directory")
                }
                break
            case "/src":
                if (currentDirectory === "~"){
                    setCurrentDirectory(currentDirectory+dir)
                }
                break
            case "/components":
                if (currentDirectory === "~/src"){
                    setCurrentDirectory(currentDirectory+dir)
                }
                break
            case "/buttons":
                if (currentDirectory === "~/src/components"){
                    setCurrentDirectory(currentDirectory+dir)
                }
                break
            case "/cards":
                if (currentDirectory === "~/src/components"){
                    setCurrentDirectory(currentDirectory+dir)
                }
                break
            case "~":
                setCurrentDirectory(dir)
                break
            case "~/src":
                setCurrentDirectory(dir)
                break
            case "~/src/components":
                setCurrentDirectory(dir)
                break
            case "~/src/components/buttons":
                setCurrentDirectory(dir)
                break
            case "~/src/components/cards":
                setCurrentDirectory(dir)
                break
            default:
                setResult(result+"\n"+"'"+dir+"' this directory does not exist")
        }
    }

    // List the directory available 
    const handleListDirectory = (dir) => {
        switch (dir){
            case "~":
                return "/src"
            case "~/src":
                return ".. /components"
            case "~/src/components":
                return ".. /buttons /cards"
            case "~/src/components/buttons":
                return buttons
            case "~/src/components/cards":
                return cards
            default:
        }
    }

    // Handle the showing behavior of the files into the <code> tag
    const handleMore = (filename) => {
        switch (filename){
            case ":BottomCard.js":
                if (currentDirectory === "~/src/components/cards"){
                    setResult(result+"\n"+filename)
                    setRenderedCode(printBottomCardJS)
                }
                break;
            case ":Container.js":
                if (currentDirectory === "~/src/components/cards"){
                    setResult(result+"\n"+filename)
                    setRenderedCode(printContainerJS)
                }
                break;
            case ":FlipCard.css":
                if (currentDirectory === "~/src/components/cards"){
                    setResult(result+"\n"+filename)
                    setRenderedCode(printFlipCardCSS)
                }
                break;
            case ":MousehoverTooltip.css":
                if (currentDirectory === "~/src/components/cards"){
                    setResult(result+"\n"+filename)
                    setRenderedCode(printMousehoverTooltipCSS)
                }
                break;
            case ":Prompt.js":
                if (currentDirectory === "~/src/components/cards"){
                    setResult(result+"\n"+filename)
                    setRenderedCode(printPromptJS)
                }
                break;
            case ":ProjectCard.js":
                if (currentDirectory === "~/src/components/cards"){
                    setResult(result+"\n"+filename)
                    setRenderedCode(printProjectCardJS)
                }
                break;
            case ":ButtonRect1.js":
                if (currentDirectory === "~/src/components/buttons"){
                    setResult(result+"\n"+filename)
                    setRenderedCode(printButtonRect1JS)
                }
                break
            default:
                setResult(result+"\n"+"No file found")
        }
    }
    
    // Handle the "Enter" key action, and the historic command made, with UP and DOWN key
    const handleKeyDown = (e) => {
        //if (e.key === 'ArrowUp'){
        //    if (indCmdHist <= commandsHistoric.length){
        //        setIndCmdHist(indCmdHist+1)
        //        console.log(indCmdHist)
        //        const tempStrHist = commandsHistoric.split(',')
        //        setPrompt(tempStrHist[tempStrHist.length-indCmdHist])
        //    }
        //}
        //if (e.key === "ArrowDown"){
        //    if (indCmdHist >= 0){
        //        setIndCmdHist(indCmdHist-1)
        //        console.log(indCmdHist)
        //        const tempStrHist = commandsHistoric.split(',')
        //        setPrompt(tempStrHist[tempStrHist.length-indCmdHist])
        //    }
        //}
        if (e.key === 'Enter') {
            setTimeout(() => {
                const promptTop = promptTopRef.current;
                promptTop.scrollTop = promptTop.scrollHeight - promptTop.clientHeight;
            }, 10);
            //setIndCmdHist(0)
            e.preventDefault()
            setPrompt(currentDirectory+"@")
            var currentCommand = handleCommand(prompt)
            setCommand(currentCommand)
            setResult(result+'\n'+currentCommand[0]+currentCommand[1])
            //setCommandsHistoric(commandsHistoric+currentCommand);
            switch (currentCommand[0]){
                // cd
                case commands[0]:
                    handleChangeDirectory(currentCommand[1])
                    break;
                // ls
                case commands[1]:
                    if (currentCommand[1] === ""){
                        setResult(result+'\n'+handleListDirectory(currentDirectory))
                    }
                    else {
                        setResult(result+"\n"+"@ls command dosn't take options → '"+currentCommand[1]+"'")
                    }
                    break;
                // more
                case commands[2]:
                    handleMore(currentCommand[1])
                    break;
                case commands[3]:
                    setResult("@clear");
                    //setIndCmdHist(0)
                    break
                // help
                case commands[4]:
                    setResult(result+'\n'+help)
                    break
                // commands list
                case commands[5]:
                    setResult(result+'\n'+commandsList)
                    break
                default:
                    setResult(result+"\n"+"'"+currentCommand[0]+"' Is not a command, type @commands to know wich command are available")
                    break
            }
        }
    }

    useEffect(() => {
        hljs.highlightAll();
      });

    return (
        <div className="grid justify-items-center">
                <h2 className="bg-slate-700 text-xl pl-10 text-green-500"><TbPrompt/>Viewport for code ↓</h2>
                <pre className="bg-slate-700">
                    <code className="language-javascript">{renderedCode}</code>
                </pre>
                <div className="w-[95%]">
                    <textarea readonly="true" id="promptTop" ref={promptTopRef} style={{ height: "300px"}} className={`grid bg-slate-950 text-green-700 w-full prompt rounded-t-lg`} value={result} defaultValue="You can type @help or @commands to start"/>
                    <textarea style={{ height: "24px"}} onChange={handleChange} id="prompt" onKeyDown={handleKeyDown} className="grid bg-slate-950 text-sky-300 h-[160px] w-full prompt rounded-b-lg shadow-lg shadow-cyan-500/50" value={prompt}/>
                </div>
                <div className="h-screen bg-slate-700"></div>
        </div>
    )
}
