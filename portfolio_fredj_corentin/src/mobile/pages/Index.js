import TopCard from "../components/cards/TopCard";
import Container from "../components/cards/Container";
import BottomCard from "../components/cards/BottomCard";
import { useRef } from "react"
import './index.css'
import React from "react"
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiFillGithub } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';




export default function Index() {


    const barsRef = useRef(null)
    const navRef = useRef(null)

    const barClicked = () => {
        barsRef.current.classList.toggle('active');
        navRef.current.classList.toggle('visible');
    }

    const [width, setWidth] = React.useState(window.innerWidth);
   const breakpoint = 992;
   React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     // subscribe to window resize event "onComponentDidMount"
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       // unsubscribe "onComponentDestroy"
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);
    if (width > breakpoint) {
        return (
            <div>   
                <div ref={barsRef} onClick={barClicked} class="bars" id="nav-action">
                <div class="bar spanNav"></div>
                </div>
                <nav ref={navRef} id="nav" className="navWeb">
                    <ul className="ulWeb">
                        <li className="liWeb shape-circle circle-one" ><a className="aWeb" target="_blank" href="https://github.com/DroxKiwi"><h2>Github</h2></a></li>
                        <li className="liWeb shape-circle circle-two" ><a className="aWeb" target="_blank" href="https://www.linkedin.com/in/corentin-fredj-75439a23b/"><h2>Linkedin</h2></a></li>
                        <li className="liWeb shape-circle circle-four"><a className="aWeb" href="mailto:corentinfredj.dev@gmail.com"><h2>e-mail @</h2></a></li>
                    </ul>
                </nav>

                <TopCard/>
                <Container/>
                <BottomCard/>
            </div>
        )
    }
   else {
        return (
            <div className="w-full">
                <div className="grid justify-items-center w-full">
                    <nav className="navMobile">
                        <div class="toggle">
                            <input type="checkbox"/>
                        <span class="btn"></span>
                            <ul className="ulMobile">
                                <li className="liMobile"><a href=""><TiSocialLinkedinCircular className="icon"/></a></li>
                                <li className="liMobile"><a href="https://github.com/DroxKiwi" target="_blank"><AiFillGithub className="icon"/></a></li>
                                <li className="liMobile"><a href="mailto:corentinfredj.dev@gmail.com" target="_blank"><MdAlternateEmail className="icon"/></a></li>
                            </ul>
                        </div>
                    </nav>
                    <TopCard/>
                    <Container/>
                    <BottomCard/>
                </div>
            </div>
        )
   }
}
