import { countrydData } from './data';

const startingYear = 1945;

export const options = {
    series: countrydData,
    chart: {
        type: 'spline',
        height: 500,
        animation: {
            duration: 1000,
        },

        // For larger ticks, increase
        spacingBottom: 80,
        zoomType: 'xy',
        events: {
            load: function () {
                document.querySelectorAll('.tick-xAxis').forEach((tick) => {
                    tick.addEventListener('click', function () {
                        console.log('click');
                    });
                });
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
        },
    },
};

const getTotalByYear = (year: number) => {
    let total = 0;
    countrydData.forEach((country, index) => {
        total += countrydData[index].data[year - startingYear];
    });
    return total;
};
