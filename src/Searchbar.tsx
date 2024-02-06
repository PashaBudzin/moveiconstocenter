import clsx from "clsx"
import { useAtom } from "jotai"
import { showSearch } from "./state/settings"
import Google from "./assets/google.svg";
import { Search } from "lucide-react";

export default function Searchbar() {
    const [show] = useAtom(showSearch);

    return (
        <form
            role="search" method="get" action="https://google.com/search?source=hp"
            autoComplete="off"
            className={
                clsx(
                    `absolute w-[52rem] left-0 right-0 mx-auto 
                    mt-5 rounded-[3rem] h-24 flex`,
                    !show && "hidden"
                )}
        >
            <img src={Google}
                className="opacity-100 relative left-14 z-20 w-8"
            />
            <input className="
                px-20
                w-full h-full rounded-[3rem] bg-white text-black text-opacity-100 text-xl"
                placeholder="Search the web"
                name="q" />
            <button className="relative right-14 z-20 w-8">
                <Search className="w-8" />
            </button>
        </form>
    )
}
