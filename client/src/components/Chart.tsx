import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { RecallData } from '@/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data: RecallData[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  // Group data by date with actual recall values
  const groupedByDate: Record<string, string> = {};

  data.forEach(item => {
    const date = new Date(item.date);
    const formattedDate = date.toLocaleDateString('default', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    groupedByDate[formattedDate] = item.recall;
  });
  
  const chartData = {
    labels: Object.keys(groupedByDate),
    datasets: [
      {
        label: 'Recall Count',
        data: Object.values(groupedByDate),
        backgroundColor: 'rgba(52, 152, 219, 0.7)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Recalls by days',
      },
    },
  };
  
  if (data.length === 0) {
    return <div className="no-data">No data available. Try adjusting your filters.</div>;
  }
  
  return <Bar data={chartData} options={options} />;
};

export default Chart; 