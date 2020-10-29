import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import mapboxgl from 'mapbox-gl';
import { geojson, TestSiteInterface } from './data';
import './App.css';

const stylesManuell: CSSProperties = {
    // width: '800px',
    // height: '584px',

    width: '600px',
    height: '450px',

    position: 'relative',
};

function App() {
    const [map, setMap] = useState<mapboxgl.Map | null>(null);
    const mapContainer = useRef<null | HTMLDivElement>(null);
    const mapWrapper = useRef<null | HTMLDivElement>(null);
    const [mapStyles, setMapStyle] = useState<CSSProperties>({
        position: 'relative',
    });
    const [mapPadding] = useState({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    });
    const mapFormat = 0.751;

    // Focus
    // https://docs.mapbox.com/mapbox-gl-js/example/fitbounds/

    const calculateDimensions = () => {
        const pageWidth: number = mapWrapper.current!.offsetWidth;
        const windowHeight: number = window.innerHeight;
        const mapWidth: number =
            pageWidth - (mapPadding.right + mapPadding.left);
        const mapHeight: number = mapWidth * mapFormat;
        setMapStyle({
            ...mapStyles,
            width: pageWidth,
            height: mapHeight,
        });
    };

    useEffect(() => {
        mapboxgl.accessToken =
            'pk.eyJ1IjoidGltb2h1YmVyIiwiYSI6ImNrZ3J5OHppMzBpbXAyc283OXBpaHNocHkifQ.ocIsIwpyDWlPMeaYKx40kw';

        const initializeMap = () => {
            calculateDimensions();
            const map = new mapboxgl.Map({
                // @ts-ignore
                container: mapContainer.current,
                style: 'mapbox://styles/timohuber/ckgs3bpcu0txd19pfz7ucsdxw',
                center: [8, 46],
                zoom: 0,
                // disable scrolling left & right
                // maxBounds: [
                //     [-169, -60], // Southwest coordinates
                //     [180, 85], // Northeast coordinates
                // ],

                // Best Option
                maxBounds: [
                    [-169, -65], // West / South coordinates
                    [180, 85], // East / Nord coordinates
                ],
            });

            map.dragRotate.disable();
            map.setRenderWorldCopies(false);

            console.log(map);
            console.log('setPadding', mapPadding);
            map.setPadding(mapPadding);

            map.on('load', () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) {
            initializeMap();
        } else {
            // @ts-ignore
            geojson.features.forEach(function (marker: TestSiteInterface) {
                // create a HTML element for each feature
                let el = document.createElement('div');
                el.className = `marker ${marker.countrycode.toLowerCase()}`;
                new mapboxgl.Marker(el)
                    .setLngLat([marker.location[1], marker.location[0]])
                    .setPopup(
                        new mapboxgl.Popup({ offset: 25 }).setHTML(
                            `<h3> ${marker.title}</h3><br />
                              <p>${marker.text}</p>`
                        )
                    )
                    // @ts-ignore
                    .addTo(map);
            });
        }
    }, [map]);

    return (
        <div id='map-wrapper' ref={mapWrapper}>
            <div ref={(el) => (mapContainer.current = el)} style={mapStyles} />
        </div>
    );
}
export default App;
