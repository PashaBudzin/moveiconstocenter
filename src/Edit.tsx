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
            <dialog open={open} className="h-screen fixed left-0 top-0 w-1/3 bg-gray-300 z-30">
                <h1 className="text-center">
                    Edit
                </h1>
                <br />
                {
                    links.map((l, i) =>
                        <div className="w-full bg-gray-700 text-white" id={l.id}>
                            {l.domain}
                            <div className="grid gap-2 grid-cols-5">
                                <button disabled={i <= 0} onClick={() => linkUp(l.id)}>
                                    Up
                                </button>
                                <button disabled={i >= links.length - 1} onClick={() => linkDown(l.id)}>
                                    Down
                                </button>
                                <button onClick={() => setLinks(links.filter(li => li.id !== l.id))}>
                                    Delete
                                </button>
                                <button onClick={
                                    () => {
                                        const url = prompt("your image's url") ?? undefined;

                                        const link = links.find(li => li.id === l.id);

                                        if (!link) throw new Error("link with that id is not found")

                                        link.customImage = url;

                                        setLinks([link, ...links.filter(li => li.id !== l.id)])
                                    }
                                }>
                                    Set custom image
                                </button>
                                <button onClick={
                                    () => {
                                        const name = prompt("your custom name") ?? undefined;

                                        const link = links.find(li => li.id === l.id);

                                        if (!link) throw new Error("link with that id is not found")

                                        link.customName = name;

                                        setLinks([link, ...links.filter(li => li.id !== l.id)])
                                    }
                                }>
                                    Set custom name
                                </button>
                            </div>
                        </div>
                    )
                }
            </dialog>
        </>
    )
}
