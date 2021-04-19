import React, { useState, useEffect, useRef } from 'react';
import Highcharts, { Chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import proj4 from 'proj4';
import mapDataIE from '@highcharts/map-collection/custom/world-palestine-highres.geo.json';
import { geojson, countries } from './data';

import './App.css';

highchartsMap(Highcharts);
if (typeof window !== 'undefined') {
    window.proj4 = window.proj4 || proj4;
}

// https://www.highcharts.com/forum/viewtopic.php?t=41813
// https://jsfiddle.net/BlackLabel/xhfrajd0/

// resize plot area

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
            // margin: [0, 0, 0, 0],
            width: window.innerWidth,
            height: 800,
            plotBackgroundColor: '#E0E0E0',
            // Inset??
            // spacing: [100, 100, 150, 100],
        },
        title: {
            text: 'Map Demo',
        },
        plotOptions: {},

        // Inset??
        // xAxis: [
        //     {
        //         // offset: 0,
        //         // maxPadding: 1,
        //     },
        // ],
        // yAxis: [
        //     {
        //         // offset: 0,
        //         // maxPadding: 1,
        //     },
        // ],

        credits: {
            enabled: false,
        },
        mapNavigation: {
            enabled: true,
        },
        tooltip: {
            headerFormat: '',
            shadow: false,
            borderWidth: 0,
            borderRadius: 0,
            pointFormat: `<b>{point.keyword}</b>
                <br />{point.text}`,
        },
        series: [
            {
                // Use the gb-all map with no data as a basemap
                name: 'Basemap',
                type: 'map',
                mapData: mapDataIE,
                borderWidth: 1,
                borderColor: '#88898b',
                nullColor: '#88898b',
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
            // const xExtremes = chart.xAxis[0].getExtremes();
            // const yExtremes = chart.yAxis[0].getExtremes();

            // chart.xAxis[0].setExtremes(xExtremes.min, xExtremes.max);
            // chart.yAxis[0].setExtremes(yExtremes.min * 1, yExtremes.max + 2000);

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
                    // color: country.color,
                    color: {
                        radialGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, country.color],
                            [0.3, country.color],
                            [0.3, '#ffffff'],
                            [0.7, '#ffffff'],
                            [0.7, country.color],
                            [1.0, country.color],
                        ],
                    },
                    marker: {
                        symbol: 'circle',
                        radius: 10,
                        shadow: 0,
                    },
                };
                // @ts-ignore
                chart.addSeries(newSerie);
            });
        }
    }, [geoData]);
    const resize = () => {

        // document.querySelector('.highcharts-container ').style.height(window.innerHeight);

        document
            .querySelectorAll(
                '.highcharts-root, .highcharts-background, .highcharts-plot-background, .highcharts-plot-border'
            )
            .forEach((elm) => {
                elm.setAttribute('height', `${window.innerHeight}px`);
            });
        document.querySelector('.highcharts-root')?.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`)
    };

    const logChart = () => {
        const chart: Chart = chartRef.current!.chart;
        console.log(chart);
    };

    return (
        <div className='App'>
            <HighchartsReact
                // @ts-ignore
                ref={chartRef}
                constructorType={'mapChart'}
                highcharts={Highcharts}
                options={mapOptions}
            />{' '}
            <button onClick={(e) => logChart()}>See chart</button>
            <button onClick={(e) => resize()}>Resize</button>
        </div>
    );
}

export default App;
