import { MeterReading, PeriodicElement } from "./model";

export const meterReadings: MeterReading[] = [
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T00:30:00Z",
        currentReading: 1200.0,
        previousReading: 1200.0,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.2,
        powerFactor: 0.95,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T01:30:00Z",
        currentReading: 1215.44,
        previousReading: 1200.0,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.299999999999999,
        powerFactor: 0.94,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T02:30:00Z",
        currentReading: 1230.88,
        previousReading: 1215.44,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.399999999999999,
        powerFactor: 0.9299999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T03:30:00Z",
        currentReading: 1246.32,
        previousReading: 1230.88,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.2,
        powerFactor: 0.9199999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T04:30:00Z",
        currentReading: 1261.76,
        previousReading: 1246.32,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.299999999999999,
        powerFactor: 0.95,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T05:30:00Z",
        currentReading: 1277.2,
        previousReading: 1261.76,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.399999999999999,
        powerFactor: 0.94,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T06:30:00Z",
        currentReading: 1292.64,
        previousReading: 1277.2,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.2,
        powerFactor: 0.9299999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T07:30:00Z",
        currentReading: 1308.08,
        previousReading: 1292.64,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.299999999999999,
        powerFactor: 0.9199999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T08:30:00Z",
        currentReading: 1323.52,
        previousReading: 1308.08,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.399999999999999,
        powerFactor: 0.95,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T09:30:00Z",
        currentReading: 1338.96,
        previousReading: 1323.52,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.2,
        powerFactor: 0.94,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T10:30:00Z",
        currentReading: 1354.4,
        previousReading: 1338.96,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.299999999999999,
        powerFactor: 0.9299999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T11:30:00Z",
        currentReading: 1369.84,
        previousReading: 1354.4,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.399999999999999,
        powerFactor: 0.9199999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T12:30:00Z",
        currentReading: 1385.28,
        previousReading: 1369.84,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.2,
        powerFactor: 0.95,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T13:30:00Z",
        currentReading: 1400.72,
        previousReading: 1385.28,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.299999999999999,
        powerFactor: 0.94,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T14:30:00Z",
        currentReading: 1416.16,
        previousReading: 1400.72,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.399999999999999,
        powerFactor: 0.9299999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T15:30:00Z",
        currentReading: 1431.6,
        previousReading: 1416.16,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.2,
        powerFactor: 0.9199999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T16:30:00Z",
        currentReading: 1447.04,
        previousReading: 1431.6,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.299999999999999,
        powerFactor: 0.95,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T17:30:00Z",
        currentReading: 1462.48,
        previousReading: 1447.04,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.399999999999999,
        powerFactor: 0.94,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T18:30:00Z",
        currentReading: 1477.92,
        previousReading: 1462.48,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.2,
        powerFactor: 0.9299999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T19:30:00Z",
        currentReading: 1493.3600000000001,
        previousReading: 1477.92,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.299999999999999,
        powerFactor: 0.9199999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T20:30:00Z",
        currentReading: 1508.8,
        previousReading: 1493.3600000000001,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.399999999999999,
        powerFactor: 0.95,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T21:30:00Z",
        currentReading: 1524.24,
        previousReading: 1508.8,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.2,
        powerFactor: 0.94,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T22:30:00Z",
        currentReading: 1539.68,
        previousReading: 1524.24,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 240,
        current: 10.299999999999999,
        powerFactor: 0.9299999999999999,
        status: "Active"
    },
    {
        meterId: "1234567890",
        readingDate: "2023-02-05T23:30:00Z",
        currentReading: 1555.12,
        previousReading: 1539.68,
        energyConsumption: 15.44,
        unit: "kWh",
        voltage: 241,
        current: 10.399999999999999,
        powerFactor: 0.9199999999999999,
        status: "Active"
    }
];

export const ELEMENT_DATA: PeriodicElement[] = [
    { meter: 'N1', name: 'St. Kilda Marina', consumption: '10079.12 kWh', cost: '$ 123.00' },
    { meter: 'N2', name: 'St. Kilda Marina', consumption: '40026.12 kWh', cost: '$ 324.00' },
    { meter: 'N3', name: 'St. Kilda Marina', consumption: ' 6941.12 kWh', cost: '$ 123.00' },
    { meter: 'N4', name: 'St. Kilda Marina', consumption: '90122.12 kWh', cost: '$ 324.00' },
    { meter: 'N5', name: 'Sorrento Marina', consumption: ' 1011.12 kWh', cost: '$ 123.00' },
    { meter: 'N6', name: 'Sorrento Marina', consumption: '12107.12 kWh', cost: '$ 324.00' },
    { meter: 'N7', name: 'Sorrento Marina', consumption: '14067.12 kWh', cost: '$ 123.00' },
    { meter: 'N8', name: 'Sorrento Marina', consumption: '15994.12 kWh', cost: '$ 456.00' },
    { meter: 'N9', name: 'Stonington Bay Marina', consumption: '18984.12 kWh', cost: '$ 125.00' },
    { meter: 'N10', name: 'Stonington Bay Marina', consumption: '20797.12 kWh', cost: '$ 122.00' },
    { meter: 'N1', name: 'St. Kilda Marina', consumption: '10079.12 kWh', cost: '$ 123.00' },
    { meter: 'N2', name: 'St. Kilda Marina', consumption: '40026.12 kWh', cost: '$ 324.00' },
    { meter: 'N3', name: 'St. Kilda Marina', consumption: ' 6941.12 kWh', cost: '$ 123.00' },
    { meter: 'N4', name: 'St. Kilda Marina', consumption: '90122.12 kWh', cost: '$ 324.00' },
    { meter: 'N5', name: 'Sorrento Marina', consumption: ' 1011.12 kWh', cost: '$ 123.00' },
    { meter: 'N6', name: 'Sorrento Marina', consumption: '12107.12 kWh', cost: '$ 324.00' },
    { meter: 'N7', name: 'Sorrento Marina', consumption: '14067.12 kWh', cost: '$ 123.00' },
    { meter: 'N8', name: 'Sorrento Marina', consumption: '15994.12 kWh', cost: '$ 456.00' },
    { meter: 'N9', name: 'Stonington Bay Marina', consumption: '18984.12 kWh', cost: '$ 125.00' },
    { meter: 'N10', name: 'Stonington Bay Marina', consumption: '20797.12 kWh', cost: '$ 122.00' },
];

export const dashboardOptions = {
    dataPool: {
        connectors: [
            {
                id: 'micro-element',
                type: 'JSON',
                options: {
                    firstRowAsNames: false,
                    columnNames: ['Food', 'Vitamin A', 'Iron'],
                    data: [
                        ['Beef Liver', 6421, 6.5],
                        ['Lamb Liver', 2122, 6.5],
                        ['Cod Liver Oil', 1350, 0.9],
                        ['Mackerel', 388, 1],
                        ['Tuna', 214, 0.6],
                    ],
                },
            },
        ],
    },
    editMode: {
        enabled: true,
        contextMenu: {
            enabled: true,
            items: ['editMode'],
        },
    },
    gui: {
        layouts: [
            {
                rows: [
                    {
                        cells: [
                            {
                                id: 'kpi-wrapper',
                                layout: {
                                    rows: [
                                        {
                                            cells: [
                                                {
                                                    id: 'kpi-vitamin-a',
                                                },
                                                {
                                                    id: 'kpi-iron',
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            {
                                id: 'dashboard-col-0',
                            },
                            {
                                id: 'dashboard-col-1',
                            },
                        ],
                    },
                    {
                        cells: [
                            {
                                id: 'dashboard-col-2',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    components: [
        {
            type: 'KPI',
            renderTo: 'kpi-vitamin-a',
            value: 900,
            valueFormat: '{value}',
            title: 'Vitamin A',
            subtitle: 'daily recommended dose',
        },
        {
            type: 'KPI',
            renderTo: 'kpi-iron',
            value: 8,
            title: 'Iron',
            valueFormat: '{value}',
            subtitle: 'daily recommended dose',
        },
        {
            sync: {
                visibility: true,
                highlight: true,
                extremes: true,
            },
            connector: {
                id: 'micro-element',
                columnAssignment: [
                    {
                        seriesId: 'Vitamin A',
                        data: ['Food', 'Vitamin A'],
                    },
                ],
            },
            renderTo: 'dashboard-col-0',
            type: 'Highcharts',
            chartOptions: {
                xAxis: {
                    type: 'category',
                    accessibility: {
                        description: 'Groceries',
                    },
                },
                yAxis: {
                    title: {
                        text: 'mcg',
                    },
                    plotLines: [
                        {
                            value: 900,
                            zIndex: 7,
                            dashStyle: 'shortDash',
                            label: {
                                text: 'RDA',
                                align: 'right',
                                style: {
                                    color: '#B73C28',
                                },
                            },
                        },
                    ],
                },
                credits: {
                    enabled: false,
                },
                plotOptions: {
                    series: {
                        marker: {
                            radius: 6,
                        },
                    },
                },
                legend: {
                    enabled: true,
                    verticalAlign: 'top',
                },
                chart: {
                    animation: false,
                    type: 'column',
                    spacing: [30, 30, 30, 20],
                },
                title: {
                    text: '',
                },
                tooltip: {
                    valueSuffix: ' mcg',
                    stickOnContact: true,
                },
                lang: {
                    accessibility: {
                        chartContainerLabel:
                            'Vitamin A in food. Highcharts Interactive Chart.',
                    },
                },
                accessibility: {
                    description: `The chart is displaying the Vitamin A amount in
                micrograms for some groceries. There is a plotLine demonstrating
                the daily Recommended Dietary Allowance (RDA) of 900
                micrograms.`,
                    point: {
                        valueSuffix: ' mcg',
                    },
                },
            },
        },
        {
            renderTo: 'dashboard-col-1',
            sync: {
                visibility: true,
                highlight: true,
                extremes: true,
            },
            connector: {
                id: 'micro-element',
                columnAssignment: [
                    {
                        seriesId: 'Iron',
                        data: ['Food', 'Iron'],
                    },
                ],
            },
            type: 'Highcharts',
            chartOptions: {
                xAxis: {
                    type: 'category',
                    accessibility: {
                        description: 'Groceries',
                    },
                },
                yAxis: {
                    title: {
                        text: 'mcg',
                    },
                    max: 8,
                    plotLines: [
                        {
                            value: 8,
                            dashStyle: 'shortDash',
                            label: {
                                text: 'RDA',
                                align: 'right',
                                style: {
                                    color: '#B73C28',
                                },
                            },
                        },
                    ],
                },
                credits: {
                    enabled: false,
                },
                plotOptions: {
                    series: {
                        marker: {
                            radius: 6,
                        },
                    },
                },
                title: {
                    text: '',
                },
                legend: {
                    enabled: true,
                    verticalAlign: 'top',
                },
                chart: {
                    animation: false,
                    type: 'column',
                    spacing: [30, 30, 30, 20],
                },
                tooltip: {
                    valueSuffix: ' mcg',
                    stickOnContact: true,
                },
                lang: {
                    accessibility: {
                        chartContainerLabel:
                            'Iron in food. Highcharts Interactive Chart.',
                    },
                },
                accessibility: {
                    description: `The chart is displaying the Iron amount in
                micrograms for some groceries. There is a plotLine demonstrating
                the daily Recommended Dietary Allowance (RDA) of 8
                micrograms.`,
                    point: {
                        valueSuffix: ' mcg',
                    },
                },
            },
        },
        {
            renderTo: 'dashboard-col-2',
            connector: {
                id: 'micro-element',
            },
            type: 'DataGrid',
            sync: {
                highlight: true,
                visibility: true,
            },
        },
    ],
};