import React, { useState, MutableRefObject, useRef } from 'react';
import Highcharts, { Chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { refactoredData } from './data';

// Example: https://www.highcharts.com/demo/bar-negative-stack

// https://www.google.com/search?q=highchart+column+with+negative+and+positive+values&rlz=1C1CHBD_deCH906CH906&sxsrf=ALeKk03t9_17TXSR4wpSzan5JWnW8ZNk6g:1603967574601&tbm=isch&source=iu&ictx=1&fir=bsMyT5y9_Ps9yM%252CTb8rX75nRrqfPM%252C_&vet=1&usg=AI4_-kR8NTn1DVCDg1rCyAIQ38vZ85QyBQ&sa=X&ved=2ahUKEwian4_szNnsAhXrsaQKHe5gBIUQ9QF6BAgSEDg#imgrc=Ow6ofAAcMw6hYM

interface SeriesInterface {
    name: string;
    data: [];
    hide: Function;
    show: Function;
}

function App() {
    const chartRef = useRef<{ chart: Chart } | null>(null);
    let selectdCountry = useRef<string | null>(null);

    const getTotalByYear = (year: number): number => {
        let total = 0;
        const index = year - 1945;
        refactoredData.forEach((country) => {
            const value =
                country.data[index] < 0
                    ? -country.data[index]
                    : country.data[index];
            total += value;
        });
        return total;
    };

    const getTotalByYearAndCountry = (
        year: number,
        countryName: string
    ): number => {
        let total = 0;
        const index = year - 1945;
        refactoredData.forEach((country) => {
            if (country.name === countryName) {
                const value =
                    country.data[index] < 0
                        ? -country.data[index]
                        : country.data[index];
                total += value;
            }
        });
        return total;
    };

    // complete chart options
    const [chartOptions] = useState({
        series: refactoredData,
        chart: {
            type: 'column',
            height: 500,
        },
        tooltip: {
            shadow: false,
            borderWidth: 0,
            formatter: function (this: any): string {
                return `<strong>${this.x}</strong><br />
                Weltweit: ${getTotalByYear(this.x)}<br />
                ${this.series.name}: ${getTotalByYearAndCountry(
                    this.x,
                    this.series.name
                )}
            `;
            },
        },
        yAxis: {
            labels: {
                formatter: function (this: any): number {
                    return this.value < 0 ? -this.value : this.value;
                },
            },
        },
        plotOptions: {
            column: {
                stacking: 'normal',
            },
            series: {
                pointStart: 1945,
                events: {
                    // manually filter series
                    legendItemClick: function (this: SeriesInterface) {
                        const chart: Chart = chartRef.current!.chart;
                        const countryCode = this.name;

                        // @ts-ignore
                        if (countryCode === selectdCountry.current) {
                            Highcharts.each(chart.series, function (
                                series: SeriesInterface
                            ) {
                                series.show();
                            });
                            selectdCountry = { current: null };
                        } else {
                            Highcharts.each(chart.series, function (
                                series: SeriesInterface
                            ) {
                                if (series.name !== countryCode) {
                                    series.hide();
                                } else {
                                    series.show();
                                }
                            });
                            selectdCountry = { current: countryCode };
                        }
                        return false;
                    },
                },
            },
        },
    });

    return (
        <main>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}

                // @ts-ignore
                ref={chartRef}
                key={'chart'}
            />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    /* Legend hover affects points and series */
                    g.highcharts-series,
                    .highcharts-point,
                    .highcharts-markers,
                    .highcharts-data-labels {
                        opacity: 1 !important;
                    }
                    
                    .highcharts-legend-series-active
                        g.highcharts-series:not(.highcharts-series-hover),
                    .highcharts-legend-point-active .highcharts-point:not(.highcharts-point-hover),
                    .highcharts-legend-series-active
                        .highcharts-markers:not(.highcharts-series-hover),
                    .highcharts-legend-series-active
                        .highcharts-data-labels:not(.highcharts-series-hover) {
                        opacity: 1 !important;
                    }
                    
                    `,
                }}
            />
        </main>
    );
}

export default App;