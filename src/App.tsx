import { useMemo } from "react";
import LinksGrid from "./LinksGrid";
import getBackground from "./background";
import { TrashIcon } from "lucide-react";
import Searchbar from "./Searchbar";
import Edit from "./Edit";

function App() {
    const background = useMemo(() => getBackground(), []);

    return (
        <div className="w-full h-screen bg-1 top-0 left-0" style={background}>
            <Searchbar />
            <div className="flex justify-center pt-52">
                <LinksGrid />
            </div>
            <button
                className="absolute right-0 bottom-0 rounded-xl bg-white opacity-30 p-2"
                onClick={() => {
                    localStorage.removeItem("links")
                    window.location.reload()
                }}>
                <TrashIcon className="opacity-100" />
            </button>
            <Edit />
        </div>
    )
}

export default App;
