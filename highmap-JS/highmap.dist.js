// var data = [{
//     name: 'Hanoi',
//     lat: 21.022736,
//     lon: 105.8019
// }, {
//     name: 'Birmingham',
//     lat: 52.483056,
//     lon: -1.893611
// }, {
//     name: 'São Paulo',
//     lat: -23.6815315,
//     lon: -46.875826
// }]

const countries = [
    { name: 'US', color: '#0099d2' },
    { name: 'USUK', color: '#ffe200' },
    { name: 'FR', color: '#8c7abe' },
    { name: 'SU', color: '#ff5844' },
    { name: 'PK', color: '#00aa45' },
    { name: 'IN', color: '#E7CD9E' },
    { name: 'CN', color: '#0099d2' },
    { name: 'KP', color: '#000000' },
    { name: 'UK', color: '#5758ac' },
];

var data = [
    {
        title: 'Amchitka Island, Alaska, USA',
        countrycode: 'US',
        lat: 51.456,
        lon: 179.102,
        text:
            '3 underground tests conducted in the 1960s and early 1970s. Closed in 1971. ',
    },
    {
        title: 'Nevada Test Site, Nevada, USA',
        countrycode: 'USUK',
        lat: 38.505191,
        lon: -117.026367,
        text:
            '904 tests, including 23 peaceful nuclear explosions, conducted by the United States between 1951 and 1992, making it the site of the greatest number of tests in the world. In addition, 24 underground tests conducted by the United Kingdom between 1962 and 1991. From 1958 onwards the testing programme of the United Kingdom was closely coordinated with that of the United States through the US-UK Mutual Defense Agreement.',
    },
    {
        title: 'Fallon, Nevada, USA',
        countrycode: 'US',
        lat: 39.2,
        lon: -118.381,
        text: '1 underground test in 1963.',
    },
    {
        title: 'Carlsbad, New Mexico, USA',
        countrycode: 'US',
        lat: 32.264,
        lon: -103.866,
        text: 'Site of one peaceful nuclear explosion in 1961.',
    },
    {
        title: 'Hattiesburg, Mississippi, USA',
        countrycode: 'US',
        lat: 31.142,
        lon: -89.57,
        text: '2 underground tests in 1964.',
    },
    {
        title: 'Open Sea, South Atlantic Ocean',
        countrycode: 'US',
        lat: -38.5,
        lon: -11.5,
        text: '3 tests, detonated from rockets, conducted in 1958.',
    },
    {
        title: 'Reggane, Sahara Desert, Algeria',
        countrycode: 'FR',
        lat: 26.19,
        lon: 0.04,
        text: '4 atmospheric tests between 1960 and 1961. Closed. ',
    },
    {
        title: 'Rifle, Colorado, USA',
        countrycode: 'US',
        lat: 39.793,
        lon: -108.368,
        text: 'Site of one peaceful nuclear explosion in 1973.',
    },
    {
        title: 'Grand Valley, Colorado, USA',
        countrycode: 'US',
        lat: 39.356,
        lon: -107.949,
        text: 'Site of one peaceful nuclear explosion in 1969.',
    },
    {
        title: 'In Ekker, Algeria',
        countrycode: 'FR',
        lat: 24.023261,
        lon: 5.072937,
        text: '13 underground tests between 1961 and 1966. Closed.',
    },
    {
        title: 'Alamogordo, New Mexico, USA',
        countrycode: 'US',
        lat: 32.879587,
        lon: -105.963821,
        text:
            'Site of the world’s first nuclear test, "Trinity", on 16 July 1945.',
    },
    {
        title: 'Enewetak Atoll, Marshall Islands',
        countrycode: 'US',
        lat: 11.556,
        lon: 162.354,
        text:
            '43 tests conducted between 1948 and 1958, including the world’s first hydrogen detonation, ("MIKE"] in 1952. Closed in 1958. ',
    },
    {
        title: 'Bikini Atoll, Marshall Islands',
        countrycode: 'US',
        lat: 11.496,
        lon: 162.371,
        text:
            '23 tests conducted between 1946 and 1956, including the largest nuclear weapon ever detonated by the United States, the "Castle Bravo" in 1954, which created the worst radiological disaster in US testing history. Closed in 1958.',
    },
    {
        title: 'Johnston Island',
        countrycode: 'US',
        lat: 16.358,
        lon: 169.536,
        text:
            '12 atmospheric tests conducted between 1958 and 1962. Closed in 1993.',
    },
    {
        title: 'Christmas Island, Kiribati',
        countrycode: 'USUK',
        lat: 2,
        lon: -157,
        text:
            '33 atmospheric tests conducted in the 1950s and early 1960s by the United States and the United Kingdom (9 tests in 1957-58], including the first UK thermonuclear detonation in 1957. Closed in 1969.',
    },
    {
        title: 'Farmington, New Mexico, USA',
        countrycode: 'US',
        lat: 36.678,
        lon: -107.209,
        text: 'Site of one peaceful nuclear explosion in 1967.',
    },
    {
        title: 'Nellis Air Force Range, Nevada, USA',
        countrycode: 'US',
        lat: 37.154,
        lon: -116.077,
        text: '5 tests between 1957 and 1963.',
    },
    {
        title: 'Central Nevada, USA',
        countrycode: 'US',
        lat: 38.634,
        lon: -118.113,
        text: '1 underground test in 1968.',
    },
    {
        title: 'Nagasaki, Japan',
        countrycode: 'US',
        lat: 32.825365,
        lon: 129.865265,
        text:
            'Site of the second nuclear weapon used for military purposes in wartime, 9 August 1945.',
    },
    {
        title: 'Hiroshima, Japan',
        countrycode: 'US',
        lat: 34.470335,
        lon: 132.456665,
        text:
            'Site of the first nuclear weapon used for military purposes in wartime, 6 August 1945.',
    },
    {
        title: 'Semipalatinsk, Kazakhstan',
        countrycode: 'SU',
        lat: 50.410952,
        lon: 80.254397,
        text:
            '456 tests and peaceful nuclear explosions (7] conducted between 1949 and 1989, making it the site of the second greatest number of tests in the world. Site of the first USSR test, "Joe 1", in 1949, and the first USSR hydrogen bomb in 1953. Closed in 1991.',
    },
    {
        title: 'Novaya Zemlya Island',
        countrycode: 'SU',
        lat: 74,
        lon: 56,
        text:
            '130 tests conducted between 1955 and 1990. Making it the site of the fourth greatest number of tests in the world. "Tsar Bomba", the largest nuclear bomb ever exploded, was tested here in 1961. ',
    },
    {
        title: 'Montebello Islands, Australia',
        countrycode: 'UK',
        lat: -20.411569,
        lon: 115.554886,
        text: '3 atmospheric tests conducted between 1952 and 1956. Closed.',
    },
    {
        title: 'Emu Field, Australia',
        countrycode: 'UK',
        lat: -29,
        lon: 132,
        text: '2 atmospheric tests in 1953. Closed.',
    },
    {
        title: 'Maralinga Test Range, Australia',
        countrycode: 'UK',
        lat: -30.166667,
        lon: 131.616667,
        text:
            '7 atmospheric tests in 1956-57. Closed. Clean-up completed in 1967.',
    },
    {
        title: 'Mururoa Atoll, French Polynesia',
        countrycode: 'FR',
        lat: -21.833333,
        lon: -138.916667,
        text:
            '179 tests (42 atmospheric and 137 underground] between 1966 and 1996, making it the third site of the greatest number of tests in the world. Closed in 1999.',
    },
    {
        title: 'Fangataufa Atoll, French Polynesia',
        countrycode: 'FR',
        lat: -22.25,
        lon: -138.75,
        text:
            '14 tests (4 atmospheric and 10 underground] conducted between 1966 and 1996, including the first French hydrogen/thermonuclear bomb, "Canopus", in 1968, the largest explosion ever detonated by France. After this test, the atoll was declared off-limits due to heavy contamination. Closed in 1999.',
    },
    {
        title: 'Lop Nur, Xinjiang Province, China',
        countrycode: 'CN',
        lat: 40.083333,
        lon: 90.083333,
        text:
            'Site of 45 tests conducted by China between 1964 and 1996, including the first hydrogen bomb in 1966, and the first thermonuclear bomb in 1968. All tests were atmospheric until 1980, then changed to underground testing. ',
    },
    {
        title: 'Pokharan, Rajastan Desert, India',
        countrycode: 'IN',
        lat: 26.92,
        lon: 71.92,
        text: '3 underground tests on 18 May 1974 and on 11 and 13 May 1998.',
    },
    {
        title: 'Ras Koh, Chagai Hills, Baluchistan, Pakistan',
        countrycode: 'PK',
        lat: 28.862,
        lon: 64.818,
        text: '2 underground tests on 28 and 30 May 1998.',
    },
    {
        title: 'Kimchaek, North Korea',
        countrycode: 'KP',
        lat: 41.3119,
        lon: 129.0189,
        text: '1 announced underground test on 9 October 2006.',
    },
    {
        title: 'Open Sea, South Pacific Ocean ',
        countrycode: 'US',
        lat: 28.733,
        lon: -126.267,
        text: 'Site of an underwater test in 1955.',
    },
    {
        title: 'Open Sea, South Pacific Ocean ',
        countrycode: 'US',
        lat: 12.617,
        lon: 163.017,
        text: 'Site of a balloon test in 1958.',
    },
    {
        title: 'Open Sea, South Pacific Ocean ',
        countrycode: 'US',
        lat: 4.833,
        lon: -149.417,
        text: 'Site of a test detonated from a rocket in 1962.',
    },
    {
        title: 'Open Sea, South Pacific Ocean ',
        countrycode: 'US',
        lat: 31.233,
        lon: -124.217,
        text: 'Site of an underwater test in 1962.',
    },
    {
        title: 'Ukraine',
        countrycode: 'SU',
        lat: 49.8,
        lon: 35.4,
        text: 'Site of two peaceful nuclear explosions in 1972 and 1979.',
    },
    {
        title: 'Uzbekistan',
        countrycode: 'SU',
        lat: 38.968,
        lon: 64.517,
        text: 'Site of two peaceful nuclear explosions in 1966 and 1968.',
    },
    {
        title: 'Turkmenistan',
        countrycode: 'SU',
        lat: 37.35,
        lon: 62.05,
        text: 'Site of one peaceful nuclear explosion in 1972. ',
    },
    {
        title: 'Aralsk, Kazakhstan',
        countrycode: 'SU',
        lat: 46,
        lon: 62,
        text: 'One atmospheric test in 1956. ',
    },
    {
        title: 'Astrakham, RSFSR',
        countrycode: 'SU',
        lat: 46.757,
        lon: 48.275,
        text: 'Site of 15 peaceful nuclear explosions between 1980 and 1984. ',
    },
    {
        title: 'Perm, RSFSR',
        countrycode: 'SU',
        lat: 57.22,
        lon: 55.393,
        text: 'Site of 8 peaceful nuclear explosions between 1969 and 1987. ',
    },
    {
        title: 'Bashkir, RSFSR',
        countrycode: 'SU',
        lat: 52.9,
        lon: 56.5,
        text:
            'Site of 6 peaceful nuclear test explosions between 1965 and 1980. ',
    },
    {
        title: 'Orenburg, RSFSR',
        countrycode: 'SU',
        lat: 52.127,
        lon: 51.994,
        text:
            'Site 1 atmospheric test (1954] and 5 peaceful nuclear explosions (1970-1973]. ',
    },
    {
        title: 'Arkhangelsk, RSFSR',
        countrycode: 'SU',
        lat: 61.358,
        lon: 48.092,
        text: 'Site of 4 peaceful nuclear explosions between 1971 and 1988. ',
    },
    {
        title: 'Komi, RSFSR',
        countrycode: 'SU',
        lat: 67.283,
        lon: 63.467,
        text: 'Site of 4 peaceful nuclear explosions between 1971 and 1984. ',
    },
    {
        title: 'Murmansk, RSFSR',
        countrycode: 'SU',
        lat: 67.75,
        lon: 33.1,
        text: 'Site of 2 peaceful nuclear explosions in 1972 and 1984. ',
    },
    {
        title: 'Stavropol, RSFSR',
        countrycode: 'SU',
        lat: 45.848,
        lon: 42.6,
        text: 'Site of one peaceful nuclear explosion in 1969. ',
    },
    {
        title: 'Ivanovo, RSFSR',
        countrycode: 'SU',
        lat: 57.508,
        lon: 42.643,
        text: 'Site of one peaceful nuclear explosion in 1971. ',
    },
    {
        title: 'Kalmik, RSFSR',
        countrycode: 'SU',
        lat: 46.853,
        lon: 44.923,
        text: 'Site of one peaceful nuclear explosion in 1972. ',
    },
    {
        title: 'Kemerevo, RSFSR',
        countrycode: 'SU',
        lat: 55.834,
        lon: 87.526,
        text: 'Site of one peaceful nuclear explosion in 1984. ',
    },
    {
        title: 'Jakutsk, RSFSR',
        countrycode: 'SU',
        lat: 66.1,
        lon: 112.65,
        text: 'Site of 12 peaceful nuclear explosions between 1974 and 1987. ',
    },
    {
        title: 'Krasnoyarsk, RSFSR',
        countrycode: 'SU',
        lat: 69.578,
        lon: 90.337,
        text: 'Site of 9 peaceful nuclear explosions between 1975 and 1982. ',
    },
    {
        title: 'Tyuemn, RSFSR',
        countrycode: 'SU',
        lat: 57.7,
        lon: 65.2,
        text: 'Site of 8 peaceful nuclear explosions between 1967 and 1988. ',
    },
    {
        title: 'Irkutsk, RSFSR',
        countrycode: 'SU',
        lat: 57.29,
        lon: 106.23,
        text: 'Site of 2 peaceful nuclear explosions in 1977 and 1982. ',
    },
    {
        title: 'Chita, RSFSR',
        countrycode: 'SU',
        lat: 50.955,
        lon: 110.983,
        text: 'Site of one peaceful nuclear explosion in 1977. ',
    },
    {
        title: 'Azgir, Kazakhstan',
        countrycode: 'SU',
        lat: 47.8,
        lon: 79,
        text: 'Site of 17 peaceful nuclear explosions between 1966 and 1979. ',
    },
    {
        title: 'Uralsk, Kazahstan',
        countrycode: 'SU',
        lat: 51.363,
        lon: 53.306,
        text: 'Site of 6 peaceful nuclear explosions between 1983 and 1984.',
    },
    {
        title: 'Mangishlak, Kazakhstan',
        countrycode: 'SU',
        lat: 43.867,
        lon: 54.8,
        text: 'Site of 3 peaceful nuclear explosions between 1969 and 1970. ',
    },
    {
        title: 'Kustonay, Kazakhstan',
        countrycode: 'SU',
        lat: 49.4,
        lon: 48.142,
        text: 'Site of one peaceful nuclear explosion in 1972. ',
    },
    {
        title: 'Tselinograd, Kazakhstan ',
        countrycode: 'SU',
        lat: 45.758,
        lon: 67.825,
        text: 'Site of 2 peaceful nuclear explosions in 1973. ',
    },
    {
        title: 'Djezkazgan, Kazakhstan',
        countrycode: 'SU',
        lat: 42.775,
        lon: 67.408,
        text: 'Site of one peaceful nuclear explosion in 1973. ',
    },
    {
        title: 'Aktyubinsk, Kazakhstan',
        countrycode: 'SU',
        lat: 47.605,
        lon: 56.227,
        text: 'Site of one peaceful nuclear explosion in 1987.',
    },
    {
        title: 'Missile Testing Range, RSFSR',
        countrycode: 'SU',
        lat: 49,
        lon: 46,
        text: 'Site of 10 atmospheric tests between 1956 and 1962.',
    },
];



let mapSeries = [
    {
        data: data,
        keys: ['code_hasc', 'value'],
        joinBy: 'code_hasc',
        name: 'World map',
        borderWidth: 1,
        borderColor: '#88898b',
        nullColor: '#88898b',
        states: {
            hover: {
                color: '#a4edba',
            },
        },
        dataLabels: {
            enabled: false,
            format: '{point.properties.postal}',
        },
    },
];

countries.forEach((country) => {
    mapSeries.push({
        type: 'mappoint',
        name: country.name,
        data: data.filter((c) => c.countrycode === country.name),
    });
});
// console.log(mapSeries);
// http://jsfiddle.net/izothep/eph5secj/2/

Highcharts.getJSON(
    'https://code.highcharts.com/mapdata/custom/world-palestine-highres.geo.json',
    function (geojson) {
        // Initiate the chart
        Highcharts.mapChart('graphics-root', {
            chart: {
                map: geojson,
                height: window.innerHeight,
                width: window.innerWidth,

                plotAreaWidth: 300,
                plotAreaHeight: 200,
                plotBorderWidth: 0,
                plotBackgroundColor: '#E0E0E0',
                // spacing: [100,100,100,100],
            },

            title: {
                text: 'GeoJSON in Highmaps',
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom',
                },
            },

            // xAxis: [{
            //     maxPadding: -0.8,
            // }],

            // yAxis: [{
            //     maxPadding: 0.2,
            // }],

            tooltip: {
                formatter: function () {
                    return `${this.point.title}`;
                },
            },

            legend: {
                enabled: false,
            },

            series: mapSeries,
        });
    }
);

console.log(
    countries.map((country) => {
        return buildSeries(country);
    })
);
