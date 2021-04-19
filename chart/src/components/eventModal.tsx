import React, { useRef } from 'react';
import { EventInterface } from '../data';

interface Props {
    event: EventInterface;
    closeEventModal: Function;
}

function EventModal({ event, closeEventModal }: Props) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    const onClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        modalRef.current?.classList.add('fade-out')
        setTimeout( () => {
            closeEventModal()
        }, 400);
    }

    return (
        <div className='modal' ref={modalRef}>
            Hello Modal
            <p onClick={(e) => onClickHandler(e)}>Close</p>
        </div>
    );
}

export default EventModal;
