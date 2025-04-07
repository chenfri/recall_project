export interface RecallFilters {
    startDate?: string;
    endDate?: string;
  }
  
  export interface RecallData {
    date: string;
    recall: string;
  }
  
  export interface CacheData {
    data: RecallData[];
    timestamp: number;
  }