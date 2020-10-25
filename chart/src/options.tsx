export const options = {
    chart: {
        type: "spline",
        height: 500,
        animation: {
            duration: 1000,
        },
        zoomType: "xy",
    },
    title: {
        text: "Anzahl Atomsprengkoepfe",
    },
    yAxis: {
        title: {
            text: "",
        },
        labels: {
            align: "right",
        },

        // labels overlap border of svg
        opposite: true,
    },

    xAxis: {
        accessibility: {
            rangeDescription: "Range: 2010 to 2017",
        },
    },

    legend: {
        layout: "vertical",
        align: "left",
        verticalAlign: "bottom",
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false,
            },
            marker: {
                enabled: false,
            },
        },
    },
    tooltip: {
        backgroundColor: "#FFFFFF",
        borderRadius: "0",
        borderWidth: "0",
        boxShadow: "0 0 2 0 rgba(0,0,0,0.5)",
    },
};
