export const getYear = (date) => date.substring(0, 4);

export const getMonth = (date) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  const monthSubstring = Number.parseInt(date.substring(5, 7), 10) - 1;
  return months[monthSubstring];
};

export const getDay = (date) => date.substring(8, 10);
