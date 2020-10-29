import React, { useState, useEffect, useRef } from 'react';
import Highcharts, { Chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import proj4 from 'proj4';
import mapDataIE from '@highcharts/map-collection/custom/world-palestine-highres.geo.json';
import { geojson, countries } from './data';

highchartsMap(Highcharts);
if (typeof window !== 'undefined') {
    window.proj4 = window.proj4 || proj4;
}

interface GeoDataInterface {
    keyword: string;
    lat: number;
    lon: number;
    text: string;
    countrycode: string;
}

function App() {
    const [geoData, setGeoData] = useState<GeoDataInterface[] | null>(null);
    const chartRef = useRef<{ chart: Chart } | null>(null);
    const [mapOptions] = useState({
        chart: {
            map: 'countries/ie/ie-all',
            margin: [0, 0, 0, 0],
            width: window.innerWidth,
        },
        title: {
            text: 'Map Demo',
        },
        credits: {
            enabled: false,
        },
        mapNavigation: {
            enabled: true,
        },
        tooltip: {
            headerFormat: '',
            pointFormat: `<b>{point.freq}</b><br><b>{point.keyword}</b>
                <br>lat: {point.lat}, lon: {point.lon}`,
        },
        series: [
            {
                // Use the gb-all map with no data as a basemap
                name: 'Basemap',
                type: 'map',
                mapData: mapDataIE,
                borderColor: '#A0A0A0',
                nullColor: 'rgba(200, 200, 200, 0.3)',
                showInLegend: false,
            },
        ],
    });

    useEffect(() => {
        if (!geoData) {
            const data = geojson.map((testsite) => {
                return {
                    keyword: testsite.title,
                    lat: testsite.location[0],
                    lon: testsite.location[1],
                    text: testsite.text,
                    countrycode: testsite.countrycode,
                };
            });
            setGeoData(data);
        }
    });
    useEffect(() => {
        if (geoData) {
            const chart: Chart = chartRef.current!.chart;
            countries.forEach((country) => {
                const data = geoData.filter(
                    (obj: GeoDataInterface) => obj.countrycode === country.name
                );
                const newSerie = {
                    type: 'mappoint',
                    name: country.name,
                    // @ts-ignore
                    data: data,
                    cursor: 'pointer',
                    color: country.color,
                };
                // @ts-ignore
                chart.addSeries(newSerie);
            });
        }
    }, [geoData]);

    return (
        <div className='App'>
            <HighchartsReact
                // @ts-ignore
                ref={chartRef}
                constructorType={'mapChart'}
                highcharts={Highcharts}
                options={mapOptions}
            />
        </div>
    );
}

export default App;
