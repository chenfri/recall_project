export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toISOString().split('T')[0];
}; 

export const generateUrlRequest = (startDate?: string, endDate?: string) => {

  let url = '/recall';
  const params = new URLSearchParams();
  if (startDate) {params.append('startDate', formatDate(startDate));}
  if (endDate) {params.append('endDate', formatDate(endDate));}
  if (params.toString()) {
    url += `?${params.toString()}`;
  }
  
  return url;
}; 