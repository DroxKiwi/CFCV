import TopCard from "../components/cards/TopCard";
import Container from "../components/cards/Container";
import BottomCard from "../components/cards/BottomCard";
import { useRef } from "react"
import './index.css'

export default function Index() {


    const barsRef = useRef(null)
    const navRef = useRef(null)

    const barClicked = () => {
        barsRef.current.classList.toggle('active');
        navRef.current.classList.toggle('visible');
    }

    return (
        <div>   
            <div ref={barsRef} onClick={barClicked} class="bars" id="nav-action">
            <div class="bar spanNav"></div>
            </div>

            <nav ref={navRef} id="nav">
            <ul>
                <li class="shape-circle circle-one"><a target="_blank" href="https://github.com/DroxKiwi"><h2>Github</h2></a></li>
                <li class="shape-circle circle-two"><a target="_blank" href="https://www.linkedin.com/in/corentin-fredj-75439a23b/"><h2>Linkedin</h2></a></li>
                <li class="shape-circle circle-three"><a href="#"><h2>Mon CV</h2></a></li>
                <li class="shape-circle circle-four"><a href="mailto:corentinfredj.dev@gmail.com"><h2>e-mail @</h2></a></li>
            </ul>
            </nav>

            <TopCard/>
            <Container/>
            <BottomCard/>
        </div>
    )
}
