import React from "react";

type ButtonStyle = 'default' | 'operation' | 'double' | 'triple' | 'result'

const STYLE_MAPS: Record<ButtonStyle, string> = {
    default: "bg-botao-branco text-black",
    operation: "bg-botao-laranja-normal active:bg-botao-laranja-active",
    double: "bg-botao-branco text-black col-span-2",
    triple: "bg-botao-branco text-black col-span-3",
    result: "bg-botao-verde-normal active: bg-botao-verde-active text-black"
}

interface Props {
    style: ButtonStyle,
    click: (input: string) => void,
    label: string
}

const Button: React.FC<Props> = ({ style, click, label}) => {

    const baseClass = "text-2xl font-orbitron border-r-1 border-botao-cinza border-b-1 border-botao-cinza outline-none cursor-pointer active:bg-botao-active"
    const finalClass = `
        ${baseClass} ${STYLE_MAPS[style]}
    `

    return <button className={ finalClass } onClick={ () => click && click(label)}>
                {label}
            </button>
}

export default Button