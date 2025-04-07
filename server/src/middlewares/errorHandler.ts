import { Request, Response, NextFunction } from 'express';

/**
 * Global error handling middleware
 */
const errorHandler = (
  error: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {
  console.error('Error:', error.message);
  
  res.status(500).json({
    error: 'Server Error',
    message: process.env.NODE_ENV === 'development' 
      ? error.message 
      : 'An unexpected error occurred'
  });
};

export default errorHandler; 