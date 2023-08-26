export default function printContainerJS () {
    return (`
    import ProjectCard from "./ProjectCard"
import bewave from "../../assets/BeWave_logo_blanc.png";
import cahupa from "../../assets/cahupa-charte-elements-08.png";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import githubImage from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import webapp from "../../assets/backendv2.png";
import mobileapp from "../../assets/appv1.png";
import cahupa3 from "../../assets/cahupa3.png";
import ButtonRect1 from '../buttons/ButtonRect1';
import Prompt from '../cards/Prompt'
import { AiFillCode } from "react-icons/ai";
import { useState } from "react";


export default function Container() {
    const [activePrompt, setActivePrompt] = useState(false)
    const styleContainer = {
        paddingTop: 350,
        paddingBottom: 50
    }

    const handleRedirectionGithub = () => {
        window.open("https://github.com/DroxKiwi");
    }
    const handleRedirectionLinkedin = () => {
        window.open("https://www.linkedin.com/in/corentin-fredj-75439a23b/");
    }
    const handleRedirectionBewave = () => {
        window.open("http://backendv2.bewaveofficial.com/");
    }
    const handleRedirectionBewaveApp = () => {
        window.open("http://appv1.bewaveofficial.com/")
    }
    const handleRedirectionCahupa = () => {
        window.open("http://backendv2.bewaveofficial.com/");
    }

    const handlePromptClick = () => {
        if (activePrompt){
            setActivePrompt(false)
        }
        else {
            setActivePrompt(true)
        }
    }

    const backContentGithub = "Lien vers mon profil Github, vous y trouverez les différents projets auxquels j'ai participé"
    const backContentLinkedin = "Lien vers mon profil Linkedin"
    const backContentBeWave = "Lien vers la version de production 0.1.3 de l'application WEB pour BeWave que j'ai développé avec mon équipe"
    const backContentBeWaveApp = "Lien vers la version de production 0.1.1 de l'application MOBILE pour BeWave que j'ai développé avec mon équipe"
    const backContentCahupa = "Lien vers le site web du bar Cahupa que j'ai designé"

    if (activePrompt){
        return (
            <div>
                <div className="grid bg-slate-700 justify-items-center content-start" style={styleContainer}>
                    <ButtonRect1 onClickBtn={handlePromptClick} icone={<AiFillCode/>} class="bg-green-700 hover:bg-green-600 mb-8"/>
                </div>
                <Prompt/>
            </div> 
        )
    }
    else {
        return (
            <div>
                <div className="grid bg-slate-700 justify-items-center content-start" style={styleContainer}>
                    <ButtonRect1 onClickBtn={handlePromptClick} icone={<AiFillCode/>} class="bg-green-700 hover:bg-green-600 mb-8"/>
                    <ProjectCard onClickBtn={handleRedirectionGithub} image={null} backImage={githubImage} icone={<DiGithubBadge/>} frontText={"Github"} backContent={backContentGithub} class={"hover:shadow-gray-50/50"}/>
                    <ProjectCard onClickBtn={handleRedirectionLinkedin} image={null} backImage={linkedin} icone={<AiFillLinkedin/>} frontText={"Linkedin"} backContent={backContentLinkedin} class={"hover:shadow-gray-50/50"}/>
                    <ProjectCard onClickBtn={handleRedirectionBewave} image={bewave} backImage={webapp} backContent={backContentBeWave} frontText={"Webapp BeWave"} class={"hover:shadow-gray-50/50"}/>
                    <ProjectCard onClickBtn={handleRedirectionBewaveApp} image={bewave} backImage={mobileapp} backContent={backContentBeWaveApp} frontText={"Mobile app BeWave"} class={"hover:shadow-gray-50/50"}/>
                    <ProjectCard onClickBtn={handleRedirectionCahupa} image={cahupa} backImage={cahupa3} backContent={backContentCahupa} frontText={"Cahupa bar"} class={"hover:shadow-gray-50/50"}/>
                </div>
            </div>
        )
    }
}

    `)
}