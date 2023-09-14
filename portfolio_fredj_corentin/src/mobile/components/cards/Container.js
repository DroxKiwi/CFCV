import ProjectCard from "./ProjectCard"
import bewave from "../../assets/BeWave_logo_blanc.png";
import cahupa from "../../assets/cahupa-charte-elements-08.png";
import webapp from "../../assets/backendv2.png";
import mobileapp from "../../assets/appv1.png";
import cahupa3 from "../../assets/cahupa3.png";
import backendv1 from "../../assets/backendv1.png"
import './Container.css'
//import BlobAnimation from "./BlocAnimation";

export default function Container() {


    const handleRedirectionBewave = () => {
        window.open("http://backendv2.bewaveofficial.com/");
    }
    const handleRedirectionBewaveApp = () => {
        window.open("http://appv1.bewaveofficial.com/")
    }
    const handleRedirectionBackendv1 = () => {
        window.open("http://backend.bewaveofficial.com/")
    }
    const handleRedirectionCahupa = () => {
        window.open("http://cahupa.com/");
    }

    const backContentBeWave = "Site web et application de gestion de contenu de l'application BeWave. Hebergé sur un droplet DigitalOcean, utilisant PostgreSQL, Express et Twig"
    const backContentBackendv1 = "Backoffice v1 pour la gestion de données de l'application BeWave, utilisant Symfony"
    const backContentBeWaveApp = "Version web utilisant ReactJS de la version Alpha 0.1 de l'application BeWave"
    const backContentCahupa = "Site web du bar le CAHUPA situé sur Angers, designé par mes soins"
    const cardClass = "cardCSS hover:shadow-gray-50/50 grid justify-items-center flex items-center bg-slate-800 shadow-lg shadow-gray-950/50"

    return (
        <div className="bg-slate-700 box w-full">
            <div className="grid bg-slate-700 justify-items-center containerCards">
                <section className="h-screen">
                    <ProjectCard onClickBtn={handleRedirectionBewave} image={bewave} backImage={webapp} backContent={backContentBeWave} frontText={"Webapp BeWave"} class={cardClass}/>
                </section>
                <section className="h-screen">
                    <ProjectCard onClickBtn={handleRedirectionBackendv1} image={bewave} backImage={backendv1} backContent={backContentBackendv1} frontText={"Backend V1"} class={cardClass}/>
                </section>
                <section className="h-screen">
                    <ProjectCard onClickBtn={handleRedirectionBewaveApp} image={bewave} backImage={mobileapp} backContent={backContentBeWaveApp} frontText={"Mobile app BeWave"} class={cardClass}/>
                </section>
                <section className="h-screen">
                    <ProjectCard onClickBtn={handleRedirectionCahupa} image={cahupa} backImage={cahupa3} backContent={backContentCahupa} frontText={"Cahupa bar"} class={cardClass}/>
                </section>
            </div>
        </div>
    )

}
