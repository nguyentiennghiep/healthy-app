'use client';
import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useChartData, useChartOptions } from './hooks';
import styles from './styles.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineGraphProps {
    height: number;
    data: { name: string; value: number }[];
}

export const LineGraph: React.FC<LineGraphProps> = ({ height, data }) => {
    const chartData = useChartData(data);
    const options = useChartOptions();

    return (
        <div className={styles.graphContainer} style={{ height }}>
            <Line data={chartData} options={options} height={height} />
        </div>
    );
};

export default React.memo(LineGraph);