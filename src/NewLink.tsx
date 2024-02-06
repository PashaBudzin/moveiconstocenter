import { Plus } from "lucide-react";
import { FormEvent, useCallback, useState } from "react";
import { linksAtom } from "./state/links";
import { useAtom } from "jotai";
import { z } from "zod";
import cuid from "cuid";

export default function NewLink() {
    const [domain, setDomain] = useState("");
    const [open, setOpen] = useState(false);
    const [links, setLinks] = useAtom(linksAtom);

    const createNewLink = useCallback((e: FormEvent) => {
        e.preventDefault();

        setLinks([...links, { domain, id: cuid(), customImage: undefined }])

        setOpen(false);
        setDomain("");
    }, [links, domain, setLinks])

    return (
        <>
            <div>
                <button onClick={() => setOpen(true)}>
                    <div className="
                    opacity-30 bg-white w-56 h-32
                    rounded-[2.5rem] shadow
                    flex flex-row justify-center items-center
            ">
                        <div className="w-20">
                            <Plus className="bg-white opacity-100 w-full h-full" />
                        </div>
                    </div>
                </button>
                <div className="relative left-[3px] w-full justify-center text-center text-white">
                    Add new link
                </div>
            </div>
            <dialog open={open} className="rounded-xl bg-gray-800 w-full md:w-1/4 h-screen md:h-40 absolute top-0 md:top-60 text-white z-30">
                <form onSubmit={createNewLink} method="dialog" className="p-8">
                    <label htmlFor="domain">URL</label>
                    <br />
                    <input
                        name="domain"
                        type="text"
                        value={domain}
                        onChange={e => setDomain(e.target.value)}
                        placeholder="Website url"
                        className="px-2 active:ring hover:ring active:ring-teal-600 hover:ring-teal-600 rounded-xl bg-gray-800 text-white
                        border border-gray-500 w-full"
                    />
                    <div className="flex mt-4 justify-end">
                        <button type="reset" onClick={() => setOpen(false)} className="border border-gray-500 rounded-xl px-1 w-20 mr-2">
                            Cancel
                        </button>
                        <button className="disabled:bg-gray-400 rounded-xl px-1 w-20 bg-orange-400"
                            disabled={!z.string().url().safeParse(domain).success}>
                            Save
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    )
}
