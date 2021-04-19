import React from 'react';
import { EventInterface } from '../data';

interface Props {
    year: number;
    event?: EventInterface;
    showEventModal?: Function;
}

function XAxisTick({ year, event, showEventModal }: Props) {
    return (
        <div
            className={`tick-xAxis ${event ? 'event-tick' : 'common-tick'}`}
            data-year={year}
        >
            <span className='connector' />
            {event ? <div className='toggle-event-icon'>+</div> : null}
            <span className='tick-year'>{year}</span>
            <span className='tick-title'>{event?.title}</span>
        </div>
    );
}

export default XAxisTick;
