import { useState, useEffect } from 'react';
import { RecallData } from '../types';
import { get } from '../api/recallApi';
import { generateUrlRequest } from '../utils';

interface FetchRecallResult {
  data: RecallData[];
  loading: boolean;
  error: string | null;
  fetchData: (startDate?: string, endDate?: string) => Promise<void>;
}

const useFetchRecall = (): FetchRecallResult => {
  const [data, setData] = useState<RecallData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (startDate?: string, endDate?: string): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      const url = generateUrlRequest(startDate, endDate);
      const response = await get<RecallData[]>(url);
      setData(response || []); 
    } catch (err) {
      console.error('Error fetching recall data:', err);
      setError('Failed to fetch recall data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData };
};

export default useFetchRecall; 