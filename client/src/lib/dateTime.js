// ✅ Define functions first
export const timeFormat = (minute) => {
  const hours = Math.floor(minute / 60);
  const minutes = minute % 60;
  return `${hours}h ${minutes}m`;
};

export const dateFormat = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

export const simpleDateFormat = (dateStr) => {
  const date = new Date(dateStr);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}


// ✅ Then export the grouped object
export const dateTime = {
  timeFormat,
  simpleDateFormat,
  dateFormat
};