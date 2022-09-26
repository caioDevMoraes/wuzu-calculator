import React from "react";

interface Props {
    value: string
}

const Display: React.FC<Props> = (props) => {
    return <div className="col-span-4 bg-display font-orbitron flex justify-end items-center p-3 text-2xl ">{ props.value }</div>
}

export default Display