import { loadCSVData } from '../services/csvService';
import { Request, Response, RequestHandler, NextFunction } from 'express';
import delay from '../utils/delay';
import { RecallData, RecallFilters } from '../types';
/**
 * Get recall data with optional date filtering
 */
export const getRecallData: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {

  try {

    const { startDate, endDate } = req.query as RecallFilters;
    await delay(3000);

    if (startDate && isNaN(new Date(startDate).getTime())) {
      const error = new Error('Invalid start date format');
      return next(error);
    }
    if (endDate && isNaN(new Date(endDate).getTime())) {
      const error = new Error('Invalid end date format');
      return next(error);
    }
    // Check if end date is before start date
    if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
      const error = new Error('End date cannot be before start date');
      return next(error);
    }

    const data = await loadCSVData();
    
    const from_ts = startDate ? new Date(startDate) : new Date(data[0].date);
    const to_ts = endDate 
    ? new Date(endDate)
    : new Date(new Date(from_ts).setMonth(new Date(from_ts).getMonth() + 1));

    from_ts.setHours(0, 0, 0, 0);
    to_ts.setHours(23, 59, 59, 999);
    
    const filteredData = data.filter((item: RecallData) => {
      const itemDate = new Date(item.date);
      return itemDate >= from_ts && itemDate <= to_ts;
    });
    res.json(filteredData);
  } catch (error) {
    console.error('Error getting recall data:', error);
    next(error);
  }
}; 