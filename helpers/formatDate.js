function formatDate(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];

  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let suffix = "th";
  if (dayOfMonth % 10 === 1 && dayOfMonth !== 11) suffix = "st";
  else if (dayOfMonth % 10 === 2 && dayOfMonth !== 12) suffix = "nd";
  else if (dayOfMonth % 10 === 3 && dayOfMonth !== 13) suffix = "rd";

  return `${dayOfWeek} ${dayOfMonth}${suffix} ${month} ${year}`;
}

module.exports = formatDate;