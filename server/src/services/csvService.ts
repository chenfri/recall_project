import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { RecallData, CacheData } from '../types';

let cache: CacheData | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

//use cache to store data, for big applications will use
export const loadCSVData = async (): Promise<RecallData[]> => {
  if (cache && (Date.now() - cache.timestamp) < CACHE_DURATION) {
    return cache.data;
  }

  // If cache is invalid or doesn't exist, load from file
  return new Promise((resolve, reject) => {
    const results: RecallData[] = [];
    fs.createReadStream(path.resolve(__dirname, '../../recall_data.csv'))
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        cache = {
          data: results,
          timestamp: Date.now()
        };
        resolve(results);
      })
      .on('error', (error) => reject(error));
  });
}; 