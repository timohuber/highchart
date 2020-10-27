import React from "react";

interface Props {
    year: number;
    event?: {
        title: string;
        text: string;
    };
}

function XAxisTick({ year, event }: Props) {
    return (
        <div className={`tick-xAxis ${event ? "event-tick" : 'common-tick'}`}>
            <span className="connector" />
            <span className="tick-year">{year}</span>
        </div>
    );
}

export default XAxisTick;
