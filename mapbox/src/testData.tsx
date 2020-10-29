// // interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
// //     0: T;
// // 	length: L;
// // }
// // coordinates: [number, number];
// // coordinates: FixedLengthArray<number, 2>


// import { testsites, TestSiteInterface } from './originalData';

export interface TestSiteInterface {
    geometry: {
        type: string;
        coordinates: {
            lng: number;
            lat: number;
        };
    };
    properties: {
        title: string;
        description: string;
    };
}

// export const geojson2 = {
//     type: 'FeatureCollection',
//     // @ts-ignore
//     features: testsites.map((site: TestSiteInterface) => {
//         return {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: {
//                     lng: site.location[0],
//                     lat: site.location[1],
//                 },
//             },
//             properties: {
//                 title: site.title,
//                 description: site.text,
//             },
//         };
//     }),
// };

export const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            geometry: {
                type: 'Point',
                coordinates: {
                    lng: -77.032,
                    lat: 38.913,
                },
            },
            properties: {
                title: 'Mapbox',
                description: 'Washington, D.C.',
            },
        },
        {
            geometry: {
                type: 'Point',
                coordinates: {
                    lng: -122.414,
                    lat: 37.776,
                },
            },
            properties: {
                title: 'Mapbox',
                description: 'San Francisco, California',
            },
        },
    ],
};
