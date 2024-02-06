export default function getBackground(): React.StyleHTMLAttributes<"div">["style"] {
    const rotation = Math.floor(Math.random() * 360);
    const { primary, seccondary } = randomColors();

    return {
        background: `linear-gradient(${rotation}deg, #${primary}, #${seccondary})`,
        filter: "brightness(0.9)"
    };
}

function randomColors(): { primary: string, seccondary: string } {
    const colors = [
        { primary: "6600FF", seccondary: "4FACF7" },
        { primary: "FCAF3C", seccondary: "F7770F" },
        { primary: "715DF2", seccondary: "6600FF" },
        { primary: "FF6F61", seccondary: "FF0066" },
        { primary: "C62368", seccondary: "001122" },
        { primary: "001122", seccondary: "715DF2" },
        { primary: "009473", seccondary: "4FACF7" },
        { primary: "bf24c7", seccondary: "4FACF7" },
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}
