import { useState } from 'react';
import DatePicker from '../components/DatePicker';
import Chart from '../components/Chart';
import Loader from '../components/Loader';
import useFetchRecall from '../hooks/useFetchRecall';

const RecallPage = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  
  const { data, loading, error, fetchData } = useFetchRecall();

  const handleDateFilter = () => {
    fetchData(startDate, endDate);
  };

  return (
    <div className="recall-page">
      <section className="filters">
        <h2>Filter Recall Data</h2>
        <div className="date-filters">
          <DatePicker 
            label="Start Date" 
            value={startDate} 
            onChange={(value) => setStartDate(value)}
          />
          <DatePicker 
            label="End Date" 
            value={endDate} 
            onChange={(value) => setEndDate(value)}
          />
          <button 
            className="filter-button" 
            onClick={handleDateFilter}
            disabled={loading}
          >
            Apply Filters
          </button>
        </div>
      </section>

      <section className="results">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="error-message">
            <p>Error: {error}</p>
          </div>
        ) : (
          <>
            <h2>Recall Data Visualization</h2>
            <div className="chart-container">
              <Chart data={data} />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default RecallPage; 