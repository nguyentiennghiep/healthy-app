import { useMemo } from 'react';

interface DataPoint {
    name: string;
    value: number;
}

export const useChartData = (data: DataPoint[]) => {
    return useMemo(() => ({
        labels: data.map(item => item.name),
        datasets: [
            {
                label: 'Values',
                data: data.map(item => item.value),
                borderColor: '#8884d8',
                backgroundColor: 'rgba(136, 132, 216, 0.2)',
                fill: true,
            },
        ],
    }), [data]);
};

export const useChartOptions = () => {
    return useMemo(() => ({
        maintainAspectRatio: false,
        aspectRatio: 4,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    color: '#777777',
                },
                ticks: { color: 'white' },
            },
            y: {
                display: false,
            },
        },
    }), []);
};