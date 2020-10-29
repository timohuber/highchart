import React, { useState, MouseEvent, useRef } from 'react';
import './App.css';
import Highcharts, {
    ExtremesObject,
    Chart,
} from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import XAxisTick from './components/xAxisTick';
import { renderToString } from 'react-dom/server';
import { eventsData } from './data';
import { options } from './options';

function App() {
    const [zoomActive, setZoomActive] = useState(false);
    const [filterActive, setFilterActive] = useState(false);

    const chartRef = useRef<{ chart: Chart } | null>(null);

    const [zoomedXAxisExtreme] = [1990];
    const [zoomedYAxisExtreme] = useState(1200);
    const axisExtremes = useRef<{
        x: ExtremesObject;
        y: ExtremesObject;
    } | null>(null);

    // complete chart options
    const [chartOptions] = useState({
        ...options,
        xAxis: {
            ...options.xAxis,
            labels: {
                ...options.xAxis.labels,
                formatter: function (
                    this: Highcharts.AxisLabelsFormatterContextObject<number>
                ): null | string {

                    if (this.pos % 10 !== 0 && !eventsData[this.pos]) {
                        return null;
                    } else {
                        return renderToString(
                            <XAxisTick
                                year={this.pos}
                                event={eventsData[this.pos]}
                            />
                        );
                    }
                },
            },
        },
    });

    const saveExtremes = (chart: Highcharts.Chart) => {
        if (!axisExtremes.current) {
            axisExtremes.current = {
                x: chart.xAxis[0].getExtremes(),
                y: chart.yAxis[0].getExtremes(),
            };
        }
    };

    const resetExtremes = (chart: Highcharts.Chart) => {
        const extremes = axisExtremes.current;
        chart.xAxis[0].setExtremes(extremes?.x.min, extremes?.x.max);
        chart.yAxis[0].setExtremes(extremes?.y.min, extremes?.y.max);
    };

    const onClickZoomHandler = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();

        const chart: Chart = chartRef.current!.chart;

        // Store max values of axis
        saveExtremes(chart);

        if (zoomActive) {
            resetExtremes(chart);
        } else {
            chart.xAxis[0].setExtremes(
                zoomedXAxisExtreme,
                axisExtremes.current?.x.max
            );
            chart.yAxis[0].setExtremes(0, zoomedYAxisExtreme);
        }
        setZoomActive(!zoomActive);
    };

    // TODO: Highcharts Interface?
    interface SeriesInterface {
        options: {
            filter: boolean;
        };
        visible: boolean;
        hide: Function;
        show: Function;
        update: Function;
        xData: [];
        yData: [];
        data: [];
    }

    const onClickFilterHandler = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();

        const chart: Chart = chartRef.current!.chart;

        // Store max values of axis
        saveExtremes(chart);

        if (filterActive) {
            resetExtremes(chart);
        } else {
            chart.yAxis[0].setExtremes(0, zoomedYAxisExtreme);
        }
        setFilterActive(!filterActive);
        Highcharts.each(chart.series, function (series: SeriesInterface) {
            if (series.options.filter) {
                !series.visible ? series.show() : series.hide();
            }
        });
    };

    return (
        <main>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                
                // dont know how to fix this
                // @ts-ignore
                ref={chartRef}
                key={'chart'}
            />
            <button onClick={(e) => onClickZoomHandler(e)}>Zoom</button>
            <button onClick={(e) => onClickFilterHandler(e)}>
                Die Kleinen
            </button>
        </main>
    );
}

export default App;
