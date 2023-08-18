import ProjectCard from "./ProjectCard"
import bewave from "../../assets/BeWave_logo_blanc.png";
import cahupa from "../../assets/cahupa-charte-elements-08.png";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";

export default function Container() {
    const styleContainer = {
        paddingTop: 400,
        paddingBottom: 50
    }

    const handleRedirectionGithub = () => {
        window.open("https://github.com/DroxKiwi");
    }
    const handleRedirectionLinkedin = () => {
        window.open("https://www.linkedin.com/in/corentin-fredj-75439a23b/");
    }

    return (
        <div>
            <div className="grid bg-slate-700 justify-items-center content-start" style={styleContainer}>
                <ProjectCard onClickBtn={handleRedirectionGithub} image={null} icone={<DiGithubBadge/>} class={"hover:shadow-gray-50/50"}/>
                <ProjectCard image={null} icone={<AiFillLinkedin/>} class={"hover:shadow-gray-50/50"}/>
                <ProjectCard image={bewave} class={"hover:shadow-gray-50/50"}/>
                <ProjectCard image={cahupa} class={"hover:shadow-gray-50/50"}/>
            </div>
        </div>
    )
}
