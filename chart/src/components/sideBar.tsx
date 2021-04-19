import React from 'react';

interface Props {
    onClickFilterHandler: Function;
    filterActive: boolean;
}

function SideBar({ filterActive, onClickFilterHandler }: Props) {
    return (
        <div className='side-bar'>
            <div className='sidebar-header'>
                <div className='sidebar-image'>
                    <h3>Das Atomwaffenarsenal der Welt</h3>
                </div>
            </div>
            <div className='sidebar-tabs'>
                <div className='sidebar-tabs-header'>
                    <a
                        onClick={
                            filterActive
                                ? (e) => onClickFilterHandler(e)
                                : undefined
                        }
                        className={
                            filterActive
                                ? 'passive'
                                : ''
                        }
                    >
                        Die Grossen
                    </a>
                    <a
                        onClick={
                            filterActive
                                ? undefined
                                : (e) => onClickFilterHandler(e)
                        }
                        className={
                            filterActive
                                ? ''
                                : 'passive'
                        }
                    >
                        Die Kleinen
                    </a>
                </div>
                <div className='sidebar-tabs-content'>
                    <p>
                        Die Grafik zeigt die Anzahl der Atomsprengköpfe aller
                        Atommächte von 1945 – heute.
                    </p>
                    <p>
                        Im kalten Krieg erreichte das weltweite
                        Atomwaffenarsenal einen erschreckenden Höhepunkt.
                        Seitdem geht die Anzahl an Sprengköpfen zwar stark
                        zurück, durch Modernisierung und Intensivierung stehen
                        wir jedoch auch heute noch einer immensen atomaren
                        Bedrohung gegenüber.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
