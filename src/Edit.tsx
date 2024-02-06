import { useAtom } from "jotai"
import { linksAtom } from "./state/links"
import { useState } from "react";
import { Pencil } from "lucide-react";

export default function Edit() {
    const [open, setOpen] = useState(false);
    const [links, setLinks] = useAtom(linksAtom);

    const linkUp = (id: string) => {
        const at = links.findIndex(l => l.id == id);

        if (!at) throw new Error("no such element");

        if (at <= 0) {
            throw new Error(`${id} is already at index 0!`)
        }

        const link1 = links[at];
        const link2 = links[at - 1];

        const r = links;

        r[at] = link2;
        r[at - 1] = link1;

        setLinks(r);
    }

    const linkDown = (id: string) => {
        const at = links.findIndex(l => l.id == id);

        if (at == -1) throw new Error("no such element");

        if (at >= links.length) {
            throw new Error(`${id} is already at index ${links.length}!`)
        }

        const link1 = links[at];
        const link2 = links[at + 1];

        console.log("FOUND")

        console.log(link1);
        console.log(link2)

        const r = links;

        r[at] = link2;
        r[at + 1] = link1;

        console.log("DONE")

        setLinks(r);
    }

    return (
        <>
            <button className="bg-white opacity-0 hover:opacity-30 p-2 rounded-xl absolute left-0 bottom-0" onClick={() => setOpen(!open)}>
                <Pencil />
            </button>
            <dialog open={open} className="h-screen fixed left-0 top-0 w-1/3 bg-zinc-700 z-30 text-white">
                <h1 className="text-center">
                    Edit
                </h1>
                <br />
                {
                    links.map(l =>
                        <div className="w-full bg-gray-700" id={l.id}>
                            {l.domain}
                            <button onClick={() => linkUp(l.id)}>
                                Up
                            </button>
                            <button onClick={() => linkDown(l.id)}>
                                Down
                            </button>
                            <button onClick={() => setLinks(links.filter(li => li.id !== l.id))}>
                                Delete
                            </button>
                        </div>
                    )
                }
            </dialog>
        </>
    )
}
