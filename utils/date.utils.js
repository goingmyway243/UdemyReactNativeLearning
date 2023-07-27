export function FormatDate(date) {
  return date.toISOString().slice(0, 10);
}

export function GetDateMinusDays(date, day) {
  return new Date(
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - day}`
  );
}
