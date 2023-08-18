import Index from "./pages/Index";
import LoadIndex from "./pages/LoadIndex"
import { useState } from "react";


function App() {

    const [loaded, setLoaded] = useState(false)

    

    const timeout = setTimeout(() => {
        // 👇️ redirects to an external URL
        setLoaded(true)
        clearTimeout(timeout);
    }, 3000);
    

    if (loaded){
        return (
            <div>
                <Index/>
            </div>
        );
    }
    else {
        return (
            <div>
                <LoadIndex/>
            </div>
        );
    }
}

export default App;
