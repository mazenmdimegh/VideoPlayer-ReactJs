export function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds} min`;
}

export function formatDate(inputDate) {
    const inputDateTime = new Date(inputDate);
  const currentDate = new Date();

  const timeDifference = currentDate - inputDateTime;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  if (daysDifference >= 365) {
    const yearsDifference = Math.floor(daysDifference / 365);
    return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
  } else if (daysDifference >= 30) {
    const monthsDifference = Math.floor(daysDifference / 30);
    return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
  } else if (daysDifference >= 7) {
    const weeksDifference = Math.floor(daysDifference / 7);
    return `${weeksDifference} week${weeksDifference > 1 ? 's' : ''} ago`;
  } else if (daysDifference >= 1) {
    return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
  } else if (hoursDifference >= 1) {
    return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
  } else if (minutesDifference > 0) {
    return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
  }