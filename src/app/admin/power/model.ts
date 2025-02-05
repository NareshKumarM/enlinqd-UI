export interface MeterReading {
    meterId: string;
    readingDate: string;
    currentReading: number;
    previousReading: number;
    energyConsumption: number;
    unit: string;
    voltage: number;
    current: number;
    powerFactor: number;
    status: string;
}

export interface PeriodicElement {
    name: string;
    meter: string;
    cost: string;
    consumption: string;
}