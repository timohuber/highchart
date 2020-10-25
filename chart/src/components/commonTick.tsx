import React, { useState, MouseEvent, useRef, MutableRefObject } from "react";

interface Props {
    year: number;
}

function CommonTick({ year }: Props) {
    const onClickHandler = (e: MouseEvent<HTMLElement>) => {
        console.log('click')
    };
    return (
        <div onClick={(e) => onClickHandler(e)} className="common-tick">
            {year}
        </div>
    );
}

export default CommonTick;
