const data = [
    {
      name: 'USA',
      data: [
            2,     9,    13,    50,   170,   299,   438,   841,
         1169,  1703,  2422,  3692,  5543,  7345, 12298, 18638,
        22229, 25540, 28133, 29463, 31139, 31175, 31255, 29561,
        27552, 26008, 25830, 26516, 27835, 28537, 27519, 25914,
        25542, 24418, 24138, 24104, 23208, 22886, 23305, 23459,
        23368, 23317, 23575, 23205, 22217, 21392, 19008, 13708,
        11511, 10979, 10904, 11011, 10903, 10732, 10685, 10577,
        10526, 10457, 10027,  8570,  8360,  7853,  5709,  5273,
         5113,  5066,  4897,  4881,  4804,  4717,  4571,  4018,
         4000
      ],
      color: '#419bf9',
      filter: true,
    },
    {
      name: 'Russia',
      data: [
            0,     0,     0,     0,     1,     5,    25,    50,
          120,   150,   200,   426,   660,   863,  1048,  1627,
         2492,  3346,  4259,  5242,  6144,  7091,  8400,  9490,
        10671, 11736, 13279, 14600, 15878, 17286, 19235, 22165,
        24281, 26169, 28258, 30665, 32146, 33486, 35130, 36825,
        38582, 40159, 38107, 36538, 35078, 32980, 29154, 26734,
        24403, 21339, 18179, 15942, 15442, 14368, 13188, 12188,
        11152, 10114,  9076,  8038,  7000,  6643,  6286,  5929,
         5527,  5215,  4858,  4750,  4650,  4600,  4500,  4490,
         4300
      ],
      color: '#ff5844',
      filter: true,
    },
    {
      name: 'UK',
      data: [
          0,   0,   0,   0,   0,   0,   0,   0,   1,   5,  10,
         50,  58,  60,  78, 105, 155, 211, 256, 271, 271, 281,
        355, 317, 306, 375, 412, 423, 500, 500, 500, 500, 500,
        500, 500, 500, 500, 385, 380, 350, 350, 350, 350, 350,
        350, 350, 350, 250, 250, 250, 234, 203, 203, 240, 240,
        280, 280, 280, 280, 280, 280, 225, 225, 225, 225, 225,
        225, 225, 225, 220, 215, 215, 215
      ],
      color: '#5758ac',
    },
    {
      name: 'France',
      data: [
          0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
          0,   0,   0,   0,   0,   0,   0,   4,  32,  36,  36,  36,
         36,  36,  45,  70, 116, 145, 188, 212, 228, 235, 235, 250,
        274, 274, 279, 280, 360, 355, 420, 410, 410, 505, 540, 540,
        525, 510, 500, 450, 450, 450, 450, 470, 350, 350, 350, 350,
        350, 350, 350, 300, 300, 300, 300, 300, 300, 300, 300, 300,
        300
      ],
      color: '#8c7abe',
    },
    {
      name: 'China',
      data: [
          0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
          0,   0,   0,   0,   0,   0,   0,   1,   5,  20,  25,  35,
         50,  75, 100, 130, 150, 170, 180, 180, 180, 190, 195, 205,
        210, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 234,
        234, 234, 234, 234, 232, 232, 232, 232, 235, 235, 235, 235,
        235, 235, 235, 235, 240, 240, 240, 240, 250, 250, 260, 260,
        270
      ],
      color: '#0099d2',
    },
    {
      name: 'Israel',
      data: [
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  4,
         6,  8, 11, 13, 15, 17, 20, 22, 24, 26, 29, 31,
        33, 35, 38, 40, 42, 44, 47, 49, 51, 53, 56, 58,
        60, 62, 63, 64, 66, 68, 70, 72, 74, 76, 78, 80,
        80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
        80
      ],
      color: '#ffe231',
    },
    {
      name: 'India',
      data: [
          0,  0,  0,  0,  0,  0,  0,   0,   0,   0,   0,   0,
          0,  0,  0,  0,  0,  0,  0,   0,   0,   0,   0,   0,
          0,  0,  0,  0,  0,  0,  0,   0,   0,   0,   0,   0,
          0,  0,  0,  0,  0,  0,  0,   0,   0,   0,   0,   0,
          0,  0,  0,  0,  0,  3,  8,  13,  18,  23,  28,  33,
         38, 43, 50, 60, 70, 80, 90, 100, 110, 100, 110, 120,
        130
      ],
      color: '#e4c488',
    },
    {
      name: 'Pakistan',
      data: [
          0,  0,  0,  0,  0,  0,   0,   0,   0,   0,   0,   0,
          0,  0,  0,  0,  0,  0,   0,   0,   0,   0,   0,   0,
          0,  0,  0,  0,  0,  0,   0,   0,   0,   0,   0,   0,
          0,  0,  0,  0,  0,  0,   0,   0,   0,   0,   0,   0,
          0,  0,  0,  0,  0,  2,   8,  14,  20,  26,  32,  38,
         44, 50, 60, 70, 80, 90, 100, 110, 115, 120, 125, 130,
        140
      ],
      color: '#01aa45',
    },
    {
      name: 'NorthKorea',
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0
      ],
      color: '#489681',
    }
  ]



const getFilteredData = () => {
    const range = startingYearFilterd - startingYear;

    return data.map( country => {
        return {
            ...country,
            data: country.data.slice(range)
        }
    })
}  

const startingYear = 1945
const startingYearFilterd = 1990

const getTotalByYear = (year, currentStartingYear) => {
    let total = 0;
    data.forEach((country, index) => {
        total += data[index].data[year - currentStartingYear]
    })
    return total;
}

const createTimelineEvents = () => {
    const plot = document.querySelector('.highcharts-plot-background');    
    console.log(plot)
}

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        title: {
            text: 'Anzahl Atomsprengkoepfe'
        },
    
        chart: {
            animation: {
                duration: 1000
            }
        },

        yAxis: {
            title: {
                text: '',
            },
            labels: {
                align: 'right',
            },

            // labels overlap border of svg
            opposite: true
        },
    
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'bottom'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                marker: {
                    enabled: false,
                },
                pointStart: startingYear
            }
        },
    
        series: data,
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },

        tooltip: {
            backgroundColor: '#FFFFFF',
            borderRadius: '0',
            borderWidth: '0',
            boxShadow: '0 0 2 0 rgba(0,0,0,0.5)',

            formatter: function() {
                return `${this.x}<br />
                    ${this.series.name}: ${this.y}<br />
                    Weltweit: ${getTotalByYear(this.x, chart.options.plotOptions.series.pointStart)}
                    `;
            }
        },

        exporting: {
            buttons: {
                contextButton: {
                    onclick: function(filtered) {
                        // Toggle USA and Russia
                        Highcharts.each(chart.series, function(country, index) {
                            if(country.userOptions.filter) {
                                !country.visible ? country.show() : country.hide()
                            }
                        })
                        if(filtered) {
                            chart.update({
                                series: data,
                                plotOptions: {
                                    series: {
                                        pointStart: startingYear
                                    }
                                }
                            })
                        } else {
                            chart.update({
                                series: getFilteredData(),
                                plotOptions: {
                                    series: {
                                        pointStart: startingYearFilterd
                                    }
                                }
                            })
                        }
                    }
                }
            }
        }
    })

    document.getElementById('toggle-detailed-view').addEventListener('click', (e) => {
        e.preventDefault()
        let filterActive = e.currentTarget.getAttribute('aria-checked') === 'true';
        chart.options.exporting.buttons.contextButton.onclick(filterActive);
        if(filterActive) {
            e.currentTarget.setAttribute('aria-checked', 'false')
        } else {
            e.currentTarget.setAttribute('aria-checked', 'true')
        }
    })
    createTimelineEvents()
});

console.log(getFilteredData())