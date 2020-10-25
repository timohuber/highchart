import React, { useState, MouseEvent, useRef, MutableRefObject } from "react";
import "./App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CommonTick from "./components/commonTick";
import { countrydData } from "./data";
import { options } from "./options";
import { renderToString } from "react-dom/server";

function App() {
    const [data] = useState(countrydData);
    const [startingYear] = useState(1945);
    const [startingYearFiltered] = useState(1990);
    const [filtered, setFiltered] = useState(false);

    const chartRef = useRef<MutableRefObject<Highcharts.Chart> | null>(null);
    // const chartRef = useRef<HTMLDivElement>()

    const [chartOptions] = useState({
        ...options,
        series: data,
        tooltip: {
            ...options.tooltip,
            formatter: function (this: any): string {
                return `<strong>${this.x}</strong><br />
            ${this.series.name}: ${this.y}<br />
            Weltweit: ${getTotalByYear(this.x)}
            `;
            },
        },
        xAxis: {
            accessibility: {
                rangeDescription: "Range: 2010 to 2017",
            },
            tickInterval: 1,
            tickLength: 0,
            labels: {
                useHTML: true,
                autoRotation: 0,

                formatterDoesNotWork: function (
                    this: Highcharts.AxisLabelsFormatterContextObject<number>
                ): any {
                    if (this.pos % 10 != 0) {
                        return null;
                    } else {
                        var tick: Highcharts.Tick = this.axis.ticks[this.pos];
                        var chart = this.chart;
                        var tooltip = chart.tooltip;

                        if (tick) {
                            // @ts-ignore
                            tick.label.element.onclick = function () {
                                console.log('test')
                            };
                        }
                        return this.value;
                    }
                },

                formatter: function (
                    this: Highcharts.AxisLabelsFormatterContextObject<number>
                ): React.ReactElement | null | string {
                    if (this.pos % 10 != 0) {
                        return null;
                    } else {
                        // return `
                        // <div class="common-tick">
                        //     ${this.pos}
                        // </div>
                        // `;
                        return renderToString(<CommonTick year={this.pos} />);
                    }
                },
            },
        },

        plotOptions: {
            series: {
                ...options.plotOptions.series,
                pointStart: startingYear,
            },
        },
        chart: {
            events: {
                load: function() {
                    document.querySelectorAll('.common-tick').forEach( tick => {
                        tick.addEventListener('click', function(){
                            console.log('click')
                        })
                    })
                }
            }
        }
    });

    const getTotalByYear = (year: number) => {
        let total = 0;
        data.forEach((country, index) => {
            total += data[index].data[year - startingYear];
        });
        return total;
    };

    // TODO: Highcharts Interface???
    interface countryInterface {
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

    const sliceData = (data: []) => {
        return data.slice(startingYearFiltered - startingYear);
    };

    const onClickHandler = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setFiltered(!filtered);

        // @ts-ignore
        const chart = chartRef.current.chart!;
        console.log(chartRef);

        // TODO: Fix this
        Highcharts.each(chart.series, function (
            country: countryInterface,
            index: number
        ) {
            if (country.options.filter) {
                !country.visible ? country.show() : country.hide();
            }

            // country.update({
            //   data: sliceData(country.data)
            // })

            // country.update({
            //     x: country.xData.slice(startingYearFiltered - startingYear),
            //     y: country.yData.slice(startingYearFiltered - startingYear),
            // });
        });
    };

    return (
        <main>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                ref={chartRef}
            />
            <button onClick={(e) => onClickHandler(e)}>Zoom</button>
        </main>
    );
}

export default App;

// const getFilteredData = () => {
//   const range = startingYearFiltered - startingYear;
//   const filtered = data.filter((country) => !country.filter);
//   return filtered.map((country) => {
//       return {
//           ...country,
//           data: country.data.slice(range),
//       };
//   });
// };
// const [filteredData] = useState(getFilteredData());
