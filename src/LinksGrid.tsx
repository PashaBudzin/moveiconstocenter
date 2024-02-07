import { useAtom } from "jotai";
import NewLink from "./NewLink";
import { linksAtom } from "./state/links";
import Link from "./Link";

export default function LinksGrid() {

    const [links] = useAtom(linksAtom);

    return (
        <div className="justify-center grid grid-cols-6 w-[74] gap-2">
            {
                links.map(l => <Link {...l} />)
            }
            <NewLink />
        </div>
    )
}
