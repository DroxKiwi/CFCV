import IndexMobile from "./mobile/pages/Index";
import LoadIndexMobile from "./mobile/pages/LoadIndex"
import { useState } from "react";
import React from 'react'


function App() {
//    const [width, setWidth] = React.useState(window.innerWidth);
//    const breakpoint = 992;
//    React.useEffect(() => {
//     const handleResizeWindow = () => setWidth(window.innerWidth);
//      // subscribe to window resize event "onComponentDidMount"
//      window.addEventListener("resize", handleResizeWindow);
//      return () => {
//        // unsubscribe "onComponentDestroy"
//        window.removeEventListener("resize", handleResizeWindow);
//      };
//    }, []);
//    if (width > breakpoint) {
//      return (
//        <div>
//          <IndexWeb/>
//        </div>
//      );
//    }
//    else {
//
//    }

    const [loaded, setLoaded] = useState(false)

    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      setLoaded(true)
      clearTimeout(timeout);
    }, 3000);
    if (loaded){
        return (
            <div>
                <IndexMobile/>
            </div>
        );
    }
    else {
        return (
            <div>
                <LoadIndexMobile/>
            </div>
        );
    }
}

export default App;
