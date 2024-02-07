// import { useDrag } from "react-dnd";

import clsx from "clsx";

export default function Link({ domain, customImage, customName }: link) {
    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: "LINK",
    //     item: { domain },
    //     collect: monitor => ({
    //         isDragging: !!monitor.isDragging()
    //     })
    // }))

    return (
        <div>
            <a href={domain} className="w-24">
                <div
                    className={
                        clsx(`
                        group
                        focus:ring-white
                        w-56 h-32 rounded-[2.5rem]
                        flex flex-row justify-center items-center
                        shadow transition-all
                        bg-cover no-repeat 
                        `,
                            !customImage && "bg-zinc-800")
                    }

                    style={
                        customImage ? { backgroundImage: `url(${customImage})` } : {}
                    }
                >
                    {
                        !customImage ?

                            <div className="w-20">
                                <img src={getIconUrl(domain, +(localStorage.getItem("size") ?? 128))} />
                            </div>
                            :
                            null
                    }
                </div>
            </a>
            <div className="w-full relative left-[3px] justify-center text-center text-white">
                {
                    getName(domain, customName)
                }
            </div>
        </div>
    )
}

function getIconUrl(domain: string, size: number) {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

function getName(domain: string, customName: string | undefined) {
    if (customName) return customName
    return stripName(domain).replace(/^(https?:|)\/\//, '').replace(/\.[a-zA-Z]+$/, "")
}

function stripName(str: string) {
    return str.length >= 21 ?
        str.substring(0, 14).concat("...")
        :
        str
}

export type link = {
    domain: string,
    id: string,
    customName?: string,
    customImage?: string
};
