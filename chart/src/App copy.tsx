import React, { useState, MouseEvent, useRef, RefObject } from 'react';
import Highcharts, { ExtremesObject, Chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import XAxisTick from './components/xAxisTick';
import EventModal from './components/eventModal';
import SideBar from './components/sideBar';
import { renderToString } from 'react-dom/server';
import { eventsData } from './data';
import { countrydData } from './data';
import { EventInterface } from './data';

import './App.css';

function App() {
    const [zoomActive, setZoomActive] = useState(false);
    const [filterActive, setFilterActive] = useState(false);
    const [overlayPosition, setOverlayPosition] = useState({
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
    });
    const [modalEvent, setModalEvent] = useState<EventInterface | null>(null);
    // const modalRef = useRef<ReactElement | HTMLDivElement>();
    const chartRef = useRef<{
        chart: Chart;
        container: RefObject<HTMLDivElement>;
    } | null>(null);

    // Default values
    const startingYear = 1945;
    const zoomedXAxisExtreme = 1990;
    const zoomedYAxisExtreme = 1200;

    interface AxisExtremes {
        x: ExtremesObject | null;
        y: ExtremesObject | null;
    }

    let axisExtremes: AxisExtremes = {
        x: null,
        y: null,
    };

    const getTotalByYear = (year: number) => {
        let total = 0;
        countrydData.forEach((country, index) => {
            total += countrydData[index].data[year - startingYear];
        });
        return total;
    };

    const saveExtremes = (chart: Highcharts.Chart) => {
        axisExtremes = {
            x: chart.xAxis[0].getExtremes(),
            y: chart.yAxis[0].getExtremes(),
        };
    };

    const updateOverlayPostition = (chart: Highcharts.Chart) => {
        const chartWidth = chart.chartWidth;
        const chartHeight = chart.chartHeight;
        setOverlayPosition({
            right: chartWidth - chart.plotWidth - chart.plotLeft,
            bottom: chartHeight - chart.plotHeight - chart.plotTop,
            height: 100,
            width:
                (chart.plotWidth *
                    (axisExtremes.x!.dataMax - zoomedXAxisExtreme)) /
                (axisExtremes.x!.dataMax - axisExtremes.x!.dataMin),
        });
    };

    const showEventModal = (year: number) => {
        const event = eventsData[year];
        console.log(event);
        setModalEvent(event);
    };

    const closeEventModal = (e: MouseEvent) => {
        setModalEvent(null);
    };

    // Set all options for the chart
    const [chartOptions] = useState({
        series: countrydData,
        chart: {
            type: 'spline',
            height: window.innerHeight,
            spacing: [100, 100, 150, 100],

            // For larger ticks, increase
            spacingBottom: 80,
            zoomType: 'xy',
            events: {
                load: function (this: Chart) {
                    // Event listener for X Axis Ticks => Passing it in props didnt work
                    document
                        .querySelectorAll('.tick-xAxis')
                        .forEach((tick: any) => {
                            tick.addEventListener('click', function () {
                                const year = tick.dataset.year;
                                showEventModal(year);
                            });
                        });

                    var axis = this.xAxis[0];
                    var ticks = axis.ticks;
                    for (const [key, tick] of Object.entries(ticks)) {
                    }
                    saveExtremes(this);
                    updateOverlayPostition(this);
                },
                redraw: function (this: Chart) {
                    updateOverlayPostition(this);
                },
            },
        },
        title: {
            text: 'Anzahl Atomsprengkoepfe',
        },
        yAxis: {
            title: {
                text: '',
            },
            labels: {
                align: 'right',
            },
            // labels overlap border of svg
            opposite: true,
        },

        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'bottom',
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false,
                },
                marker: {
                    enabled: false,
                },
                pointStart: startingYear,
            },
        },

        tooltip: {
            backgroundColor: '#FFFFFF',
            borderRadius: '0',
            borderWidth: '0',
            boxShadow: '0 0 2 0 rgba(0,0,0,0.5)',
            formatter: function (this: any): string {
                return `<strong>${this.x}</strong><br />
            ${this.series.name}: ${this.y}<br />
            Weltweit: ${getTotalByYear(this.x)}
            `;
            },
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017',
            },
            tickInterval: 1,
            tickLength: 0,
            labels: {
                useHTML: true,
                autoRotation: 0,
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

    const resetExtremes = (chart: Highcharts.Chart) => {
        const extremes = axisExtremes;
        chart.xAxis[0].setExtremes(extremes.x?.min, extremes.x?.max);
        chart.yAxis[0].setExtremes(extremes.y?.min, extremes.y?.max);
    };

    const onClickZoomHandler = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();

        const chart: Chart = chartRef.current!.chart;

        if (zoomActive) {
            resetExtremes(chart);
        } else {
            chart.xAxis[0].setExtremes(zoomedXAxisExtreme, axisExtremes.x?.max);
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
            {modalEvent ? (
                <EventModal
                    event={modalEvent}
                    closeEventModal={closeEventModal}
                />
            ) : null}
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                // dont know how to fix this
                ref={chartRef}
                key={'chart'}
            />
            <div
                className='toggle-zoom-overlay'
                onClick={(e) => onClickZoomHandler(e)}
                style={overlayPosition}
            >
                Zoom
            </div>
            <button onClick={(e) => onClickFilterHandler(e)}>
                Die Kleinen
            </button>
        </main>
    );
}

export default App;
